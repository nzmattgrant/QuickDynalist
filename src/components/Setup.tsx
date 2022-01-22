import React, { Component } from 'react';
import { DynalistApi } from 'dynalist-api';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export class Setup extends Component<any, { dynalistApiToken: string }> {
  constructor(props: any) {
    super(props);
    this.state = { dynalistApiToken: '' };
  }

  setDynalistToken = async () => {
    const apiKey = this.state.dynalistApiToken;
    const dynalistApi = new DynalistApi(apiKey);
    try {
      const testResult = (await dynalistApi.listFiles()) as any;
      if (testResult._code && testResult._code === 'Ok') {
        localStorage.setItem('quick-dynalist-api-key', apiKey);
        this.props.history.push('/');
        return;
      }
      if (testResult._code && testResult._code === 'InvalidToken') {
        throw new Error('Invalid token entered');
      }
      throw new Error('Request not accepted');
    } catch (e) {
      toast.error((e as Error).message, {
        position: 'bottom-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  handleChange = (event: any) => {
    this.setState({ dynalistApiToken: event.target.value });
  };

  render() {
    return (
      <div
        className='container square-box d-flex justify-content-center'
        style={{
          width: '500px',
          height: '200px',
          position: 'absolute',
          top: '50%',
          left: '50%',
          margin: '-150px 0 0 -250px',
          flexDirection: 'column',
        }}
      >
        <div>
          <h1>Enter Dynalist API token</h1>
        </div>
        <div>
          <p>
            Enter your api token found{' '}
            <a target='_blank' href='https://dynalist.io/developer'>
              here
            </a>
          </p>
          <p>this key will only be held locally on your browser and will not be sent to any server</p>
        </div>
        <div>
          {' '}
          <input
            type='text'
            style={{ width: '400px', marginRight: '10px' }}
            value={this.state.dynalistApiToken}
            onChange={this.handleChange}
          />
          <button className='btn btn-primary' onClick={this.setDynalistToken}>
            Enter
          </button>
        </div>
        <ToastContainer />
      </div>
    );
  }
}
