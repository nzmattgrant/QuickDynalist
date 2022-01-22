import { Component } from 'react';
import { DynalistApi } from 'dynalist-api';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export class Inbox extends Component<any, { dynalistApiToken: string; inboxInput: string }> {
  private dynalistApi?: DynalistApi;

  constructor(props: any) {
    super(props);
    this.state = { dynalistApiToken: '', inboxInput: '' };
  }

  componentDidMount() {
    const dynalistApiKey = localStorage.getItem('quick-dynalist-api-key') as string;
    //check if we have the api token
    //if not redirect to setup
    console.log(dynalistApiKey);
    if (!dynalistApiKey) {
      this.props.history.push('/Setup');
    }
    this.dynalistApi = new DynalistApi(dynalistApiKey);
  }

  clearKey = () => {
    localStorage.removeItem('quick-dynalist-api-key');
    this.props.history.push('/Setup');
  };

  sendTextToInbox = async () => {
    try {
      console.log(this.state.inboxInput);
      const result = await this.dynalistApi?.sendToInbox(this.state.inboxInput);
      console.log('sent to inbox', result);
      toast.success('Sent to inbox', {
        position: 'bottom-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      this.setState({ inboxInput: '' });
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
    this.setState({ inboxInput: event.target.value });
  };

  render() {
    return (
      <div>
        <div>
          <button style={{ margin: '10px' }} className='btn btn-danger' onClick={this.clearKey}>
            Clear dynalist key
          </button>
        </div>
        <div
          className='container square-box d-flex justify-content-center align-items-center'
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
            <h1>Add to inbox</h1>
          </div>
          <div>
            <input
              style={{ width: '400px', marginRight: '10px' }}
              type='text'
              value={this.state.inboxInput}
              onChange={this.handleChange}
            />
            <button className='btn btn-primary' onClick={this.sendTextToInbox}>
              Add
            </button>
          </div>
        </div>
        <ToastContainer />
      </div>
    );
  }
}