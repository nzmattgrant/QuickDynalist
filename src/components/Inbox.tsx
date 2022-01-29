import { Component } from 'react';
import { DynalistApi } from 'dynalist-api';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export class Inbox extends Component<any, { inboxInput: string; sendingInProgress: boolean }> {
  private dynalistApi?: DynalistApi;

  constructor(props: any) {
    super(props);
    this.state = { sendingInProgress: false, inboxInput: '' };
  }

  componentDidMount() {
    const dynalistApiKey = localStorage.getItem('quick-dynalist-api-key') as string;
    //check if we have the api token
    //if not redirect to setup
    console.log(dynalistApiKey);
    if (!dynalistApiKey) {
      this.props.history.push('/Setup');
    }
    this.dynalistApi = new DynalistApi(dynalistApiKey, 0);
  }

  clearKey = () => {
    localStorage.removeItem('quick-dynalist-api-key');
    this.props.history.push('/Setup');
  };

  sendTextToInbox = async () => {
    try {
      console.log(this.state.inboxInput);
      this.setState((prev) => {
        return { ...prev, sendingInProgress: true };
      });
      await this.dynalistApi?.sendToInbox(this.state.inboxInput);
      toast.success('Sent to inbox', {
        position: 'bottom-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      this.setState((prev) => {
        return { ...prev, inboxInput: '' };
      });
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
      this.setState((prev) => {
        return { ...prev, sendingInProgress: false };
      });
    }
  };

  handleChange = (event: any) => {
    this.setState((prev) => {
      return { ...prev, inboxInput: event.target.value };
    });
  };

  handleKeyDown = (event: any) => {
    if (event.key === 'Enter' && !this.state.sendingInProgress && this.state.inboxInput) {
      this.sendTextToInbox();
    }
  };

  render() {
    return (
      <div style={{ position: 'absolute', top: '0px', bottom: '0px', width: '100%' }}>
        <div>
          <button
            style={{ margin: '10px' }}
            className='btn btn-danger'
            onClick={this.clearKey}
          >
            Clear dynalist key
          </button>
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            height: 'calc(100% - 120px)',
          }}
        >
          <div>
            <h1>Add to inbox</h1>
          </div>
          <div style={{width: '100%', maxWidth:'1000px'}}>
            <input
              style={{ width: 'calc(100% - 110px)', margin: '10px' }}
              type='text'
              value={this.state.inboxInput}
              onChange={this.handleChange}
              onKeyDown={this.handleKeyDown}
            />
            <button style={{width: '70px', margin: '10px'}} className='btn btn-primary' disabled={this.state.sendingInProgress || !this.state.inboxInput} onClick={this.sendTextToInbox}>
              Add
            </button>
          </div>
          { this.state.sendingInProgress ? <div style={{color: 'green'}}>Sending to inbox...</div> : <></> }
        </div>
        <ToastContainer />
      </div>
    );
  }
}
