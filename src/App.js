import React from 'react';
import './App.css';

function App() {

  const account = async () => {
    const data = await window.ethereum.request({ method: 'eth_requestAccounts' })
    console.log('WebView eth_requestAccounts => ', data);
  };

  const sendToRN = () => {
    if (window.ReactNativeWebView) {
      // RN 에서만 반응함
      // RN에서 데이터는 반드시 문자열로 받아야 하기 때문에
      // JSON.stringify를 사용
      // RN console 로그로 찍힘
      window.ReactNativeWebView.postMessage(
        JSON.stringify({ data: "hello" })
      );
    } else {
      console.log("웹에서 데이터전송 버튼 누름")
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={account}>계정정보</button>
        <button onClick={sendToRN}>데이터전송</button>
      </header>
    </div>
  );
}

export default App;
