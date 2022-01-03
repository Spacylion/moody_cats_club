import React, { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { connect } from "./redux/blockchain/blockchainActions";
import { fetchData } from "./redux/data/dataActions";
import * as s from "./styles/globalStyles";
import styled from "styled-components";
import Faq from "react-faq-component";
import {
  Navbar,
  Col,
  Row,
  Container,
  Button,
  NavLink,
  Nav,
  NavDropdown,
} from "react-bootstrap";

import "./styles/ButtonConnectTOP.css";

const truncate = (input, len) =>
  input.length > len ? `${input.substring(0, len)}...` : input;

export const StyledButton = styled.button`
  padding: 10px;
  border-radius: 50px;
  border: none;
  background-color: none;
  padding: 10px;
  font-weight: bold;
  color: #000000;
  width: 200px;
  cursor: pointer;
  box-shadow: 0px 6px 0px -2px rgba(250, 250, 250, 0.3);
  -webkit-box-shadow: 0px 6px 0px -2px rgba(250, 250, 250, 0.3);
  -moz-box-shadow: 0px 6px 0px -2px rgba(250, 250, 250, 0.3);
  :active {
    box-shadow: none;
    -webkit-box-shadow: none;
    -moz-box-shadow: none;
  }
`;

export const StyledButton2 = styled.button`
  padding: 1rem 1rem;
  border-radius: 5px;
  background: none;
  color: #fff;
  font-size: .85rem;
  box-shadow: -0.16em -0.2em red, 0.16em 0.2em rgb(255, 153, 0);
 // box-shadow: -0.16em -0.2em red, 0.16em 0.2em #0ff;
  text-align: center;
  vertical-align: middle;
font-family: 'Orbitron', sans-serif;
  transition: .3s ease;
  cursor: pointer;
  transform: scale(1);
  user-select: none;
}  
`;

export const StyledRoundButton = styled.button`
  padding: 10px;
  border-radius: 100%;
  border: none;
  background-color: var(--primary);
  padding: 10px;
  font-weight: bold;
  font-size: 15px;
  color: var(--primary-text);
  width: 30px;
  height: 30px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 4px 0px -2px rgba(250, 250, 250, 0.3);
  -webkit-box-shadow: 0px 4px 0px -2px rgba(250, 250, 250, 0.3);
  -moz-box-shadow: 0px 4px 0px -2px rgba(250, 250, 250, 0.3);
  :active {
    box-shadow: none;
    -webkit-box-shadow: none;
    -moz-box-shadow: none;
  }
`;

export const ResponsiveWrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: stretched;
  align-items: stretched;
  width: 100%;
  @media (min-width: 767px) {
    flex-direction: row;
  }
`;

export const StyledLogo = styled.img`
  width: 200px;
  @media (min-width: 767px) {
    width: 300px;
  }
  transition: width 0.5s;
  transition: height 0.5s;
`;

export const StyledImg = styled.img`
  box-shadow: 0px 5px 11px 2px rgba(0, 0, 0, 0.7);
  border: 4px dashed var(--secondary);
  background-color: var(--accent);
  border-radius: 100%;
  width: 200px;
  @media (min-width: 900px) {
    width: 250px;
  }
  @media (min-width: 1000px) {
    width: 300px;
  }
  transition: width 0.5s;
`;

export const StyledLink = styled.a`
  color: var(--secondary);
  text-decoration: none;
`;

export const StyledImg2 = styled.img`
  width: 200px;
  height: 100px;
  @media (min-width: 767px) {
    width: 350px;
    height: 200px;
  }
  transition: width 0.5s;
  transition: height 0.5s;
`;

export const StyledImg3 = styled.img`
  width: 250px;
  height: 250px;
  @media (min-width: 767px) {
    width: 350px;
    height: 350px;
  }
  transition: width 0.5s;
  transition: height 0.5s;
`;

function ButtonConnect() {
  const data1 = {};

  const styles = {
    bgColor: "black",
    titleTextColor: "orange",
    rowTitleColor: "white",
    rowContentColor: "grey",
    arrowColor: "red",
    rowContentPaddingRight: "0",
    transitionDuration: "1s",
    timingFunc: "ease",
    rowTitleTextSize: "Medium",
    fontfamily: "Epilogue",
    rowContentTextSize: "small",
  };

  const config = {
    animate: true,
    arrowIcon: "gm",
    tabFocus: true,
  };

  const dispatch = useDispatch();
  const blockchain = useSelector((state) => state.blockchain);
  const data = useSelector((state) => state.data);
  const [claimingNft, setClaimingNft] = useState(false);
  const [feedback, setFeedback] = useState(<h2 MintNowText>Mint your NFT.</h2>);
  const [mintAmount, setMintAmount] = useState(1);
  const [CONFIG, SET_CONFIG] = useState({
    CONTRACT_ADDRESS: "",
    SCAN_LINK: "",
    NETWORK: {
      NAME: "",
      SYMBOL: "",
      ID: 0,
    },
    NFT_NAME: "",
    SYMBOL: "",
    MAX_SUPPLY: 1,
    WEI_COST: 0,
    DISPLAY_COST: 0,
    GAS_LIMIT: 0,
    MARKETPLACE: "",
    MARKETPLACE_LINK: "",
    SHOW_BACKGROUND: false,
  });

  const claimNFTs = () => {
    let cost = CONFIG.WEI_COST;
    let gasLimit = CONFIG.GAS_LIMIT;
    let totalCostWei = String(cost * mintAmount);
    let totalGasLimit = String(gasLimit * mintAmount);
    console.log("Cost: ", totalCostWei);
    console.log("Gas limit: ", totalGasLimit);
    setFeedback(`Minting your ${CONFIG.NFT_NAME}...`);
    setClaimingNft(true);
    blockchain.smartContract.methods
      // below is for new contract with 1 parameter!
      .mint(mintAmount)
      //.mint(blockchain.account,mintAmount)
      .send({
        gasLimit: String(totalGasLimit),
        to: CONFIG.CONTRACT_ADDRESS,
        from: blockchain.account,
        value: totalCostWei,
      })
      .once("error", (err) => {
        console.log(err);
        setFeedback("Sorry, something went wrong please try again later.");
        setClaimingNft(false);
      })
      .then((receipt) => {
        console.log(receipt);
        setFeedback(`You GMI, ${CONFIG.NFT_NAME} is yours`);
        setClaimingNft(false);
        dispatch(fetchData(blockchain.account));
      });
  };

  const decrementMintAmount = () => {
    let newMintAmount = mintAmount - 1;
    if (newMintAmount < 1) {
      newMintAmount = 1;
    }
    setMintAmount(newMintAmount);
  };

  const incrementMintAmount = () => {
    let newMintAmount = mintAmount + 1;
    if (newMintAmount > 20) {
      newMintAmount = 20;
    }
    setMintAmount(newMintAmount);
  };

  const getData = () => {
    if (blockchain.account !== "" && blockchain.smartContract !== null) {
      dispatch(fetchData(blockchain.account));
    }
  };

  const getConfig = async () => {
    const configResponse = await fetch("/config/config.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    const config = await configResponse.json();
    SET_CONFIG(config);
  };

  useEffect(() => {
    getConfig();
  });

  useEffect(() => {
    getData();
  }, [blockchain.account]);

  /* HERE STARTS APP. 
When dev is drunk lol !  */

  return (
    <div className="DivConnect1">
      {Number(data.totalSupply) >= CONFIG.MAX_SUPPLY ? (
        <>
          <StyledLink target={"_blank"} href={CONFIG.MARKETPLACE_LINK}>
            {CONFIG.MARKETPLACE}
          </StyledLink>
        </>
      ) : (
        <>
          {blockchain.account === "" || blockchain.smartContract === null ? (
            <s.Container ai={"center"} jc={"center"}>
              <button1
                className="Mrbutton"
                onClick={(e) => {
                  e.preventDefault();
                  dispatch(connect());
                  getData();
                }}
              >
                <h1 className="MintNowText"> CONNECT TO METAMASK</h1>
              </button1>
              {blockchain.errorMsg !== "" ? <></> : null}
            </s.Container>
          ) : (
            <>
              <s.Container ai={"center"} jc={"center"} fd={"row"}>
                <s.TextDescription
                  style={{
                    textAlign: "center",
                    color: "var(--accent-text)",
                  }}
                >
                  <h1 class="Connected"> CONNECTED </h1>
                </s.TextDescription>
              </s.Container>
            </>
          )}
        </>
      )}
    </div>
  );
}

export default ButtonConnect;
