import { Component } from 'react';
import { DynalistApi } from 'dynalist-api';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';

export class Setup extends Component<any, { dynalistApiToken: string; sendingInProgress: boolean }> {
  constructor(props: any) {
    super(props);
    this.state = { dynalistApiToken: '', sendingInProgress: false };
  }

  setDynalistToken = async () => {
    this.setState((prevState) => {
      return { ...prevState, sendingInProgress: true };
    });
    const apiKey = this.state.dynalistApiToken;
    const dynalistApi = new DynalistApi(apiKey, 0);
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
    } finally {
      this.setState((prevState) => {
        return { ...prevState, sendingInProgress: false };
      });
    }
  };

  handleChange = (event: any) => {
    this.setState({ dynalistApiToken: event.target.value });
  };

  handleKeyDown = (event: any) => {
    if (event.key === 'Enter' && this.state.dynalistApiToken) {
      this.setDynalistToken();
    }
  };

  render() {
    return (
      <div style={{ position: 'absolute', top: '0px', bottom: '0px', width: '100%' }}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            height: '100%',
          }}
        >
          <div style={{ width: '100%', maxWidth: '1000px', margin: '10px' }}>
            <div style={{ margin: '10px' }}>
              <div>
                <h1>Enter Dynalist API Token</h1>
              </div>
              <div>
                <p>
                  This is a tool to quickly add items to your dynalist{' '}
                  <a href='https://help.dynalist.io/article/119-set-an-inbox-location'>inbox</a>. To set this up you
                  will need to add your dynalist api token to the site (this will be saved only to localstorage on your
                  browser). If you (rightly) don't trust this site and would rather host this tool yourself then you can
                  fork the code at <a href='https://github.com/nzmattgrant/QuickDynalist'>github</a> and host it
                  yourself (for free) at <a href='https://pages.github.com/'>github pages</a>
                </p>
                <p>
                  Enter your api token found{' '}
                  <a target='_blank' href='https://dynalist.io/developer'>
                    here
                  </a>
                </p>
                <p>This key will only be held locally on your browser and will not be sent to any server</p>
              </div>
            </div>
            <div>
              {' '}
              <div>
                <textarea
                  style={{ width: 'calc(100% - 20px)', marginLeft: '10px', marginRight: '10px' }}
                  rows={4}
                  cols={50}
                  value={this.state.dynalistApiToken}
                  onChange={this.handleChange}
                  onKeyDown={this.handleKeyDown}
                />
              </div>
              <button
                style={{ margin: '10px' }}
                disabled={!this.state.dynalistApiToken}
                className='btn btn-primary'
                onClick={this.setDynalistToken}
              >
                Enter
              </button>
              <div style={{ marginLeft: '10px' }}>
                <Link to='/use-as-app'>Use as App</Link>
              </div>
              {this.state.sendingInProgress ? (
                <div style={{ color: 'green', margin: '10px' }}>Setting api key, please wait to be redirected...</div>
              ) : (
                <></>
              )}
            </div>
          </div>
        </div>
        <ToastContainer />
      </div>
    );
  }
}
