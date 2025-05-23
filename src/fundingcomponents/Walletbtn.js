import { useAccount, useDisconnect } from "wagmi";
// import { useWeb3Modal } from "@web3modal/wagmi/react";
import { useEffect, useState } from "react";
import MM from "../landingcomponents/Toast/MM";

// import HeaderIconR1 from "../images/HeaderIconR1.svg";
// import HeaderIconR2 from "../images/HeaderIconR2.svg";
// import { NonceTooLowError } from "viem";
export const Wallnetbtn = () => {
  const { isConnecting, isDisconnected } = useAccount();
  // const { open } = useWeb3Modal();
  const { disconnect } = useDisconnect();
  const open = () => {};
  const [walletModalVisible, setWalletModalVisible] = useState(false);
  const connectWallet = () => setWalletModalVisible(true);
  useEffect(() => {
    if (window.ethereum) {
      window.ethereum.on("chainChanged", (chainID) => {
        if (
          !(
            chainID === 5 ||
            chainID === 11155111 ||
            chainID === 1 ||
            chainID === 137
          )
        )
          disconnect();
      });
      // window.ethereum.on("accountsChanged", () => {
      //   window.location.reload();
      // });
    }
  });

  return (
    <div className="another">
      {!isConnecting && !isDisconnected ? (
        <div>
          <div className="wallnetBtn" onClick={() => open()}>
            Disconnect
          </div>
        </div>
      ) : (
        <div className="topBarBtn">
          {/* <div
            className="tabButton colorloginBtn"
            onClick={() => {
              alert("Login");
            }}
          >
            Login
          </div> */}
          <div
            className="tabButton colortabBtn"
            onClick={() => connectWallet()}
          >
            Connect Wallet
          </div>
        </div>
      )}
      <MM isOpen={walletModalVisible} setIsOpen={setWalletModalVisible}></MM>
    </div>
  );
};
