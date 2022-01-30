import { Component } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { ArrowLeft } from 'react-bootstrap-icons';

export class UseAsApp extends Component<any> {
  constructor(props: any) {
    super(props);
  }

  goBack = () => {
    this.props.history.push('/');
  };

  render() {
    return (
      <div style={{ position: 'absolute', top: '0px', bottom: '0px', width: '100%' }}>
        <div>
          <ArrowLeft
            style={{ width: '30px', height: '30px', marginTop: '20px', marginLeft: '10px' }}
            onClick={this.goBack}
          />
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            height: 'calc(100% - 100px)',
          }}
        >
          <div style={{ margin: '10px' }}>
            <div>
              <h1>Use Quick Add Dynalist as an app</h1>
            </div>
            <div>
              <h2>iOS</h2>
              <ul>
                <li>Open this website in Safari</li>
                <li>Tap Share (the middle button) in Safari's bottom bar</li>
                <li>Select Add to Home Screen</li>
              </ul>
              <h2>Android</h2>
              <ul>
                <li>Open this website in Chrome</li>
                <li>Tap on the hamburger menu in the upper right-hand corner of the Chrome window</li>
                <li>Select Add to Home Screen</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
