import "./faq.css";
import { Accordion } from "react-bootstrap";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const FAQ = () => {
  return (
    <>
      <div id="FAQ">
        <Accordion defaultActiveKey="0" className="faq_div">
          <Accordion.Item eventKey="0" className="faq_div1">
            <Accordion.Header>
              What Is a Non-Fungible Token (NFT)?
            </Accordion.Header>
            <Accordion.Body>
              Non-fungible tokens or NFTs are cryptographic assets on blockchain
              with unique identification codes and metadata that distinguish
              them from each other. Unlike cryptocurrencies, they cannot be
              traded or exchanged at equivalency. This differs from fungible
              tokens like cryptocurrencies, which are identical to each other
              and, therefore, can be used as a medium for commercial
              transactions.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1" className="faq_div2">
            <Accordion.Header>What is MetaMask?</Accordion.Header>
            <Accordion.Body>
              MetaMask is one of the most popular browser extensions that serves
              as a way of storing your Ethereum and other NFTs. The extension is
              free and secure, and it allows web applications to read and
              interact with Ethereum's blockchain.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2" className="faq_div3">
            <Accordion.Header>
              Where does my Moody Cats go after buying it?
            </Accordion.Header>
            <Accordion.Body>
              After buying a Moody Cats, it will directly go into your wallet
              depending on what wallet you used to purchase it, however, we do
              recommend using metamask as it is compatible with OpenSea and a
              very secure way to buy NFTs.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3" className="faq_div4">
            <Accordion.Header>
              What can I do with the purchased Moody Cats?
            </Accordion.Header>
            <Accordion.Body>
              After buying a Moody Cats, you are officially a Moody Cats owner,
              this means that you can either keep it as an investment or list it
              directly for a little more than what you paid for to try and make
              a profit. ​
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="4" className="faq_div5">
            <Accordion.Header>
              What are the benefits of buying a Moody Cats?
            </Accordion.Header>
            <Accordion.Body>
              The benefits of buying Moody Cats, are that you will be able to
              see the project grow and access exclusive giveaways of Moody Cats
              events. Moody Cats events are Moody Cats in the theme of the
              specific event. ​
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
      <div class="navbar" id="Socials">
        <a href="#Home" class="active">
          Home
        </a>

        <a href="https://discord.gg/Je5QXWjn7n">Discord</a>

        <a href="https://www.instagram.com/crazycats_nft/">Instagram</a>
        <a href="https://twitter.com/Crazycats_NFT">
          <i class="fab fa-discord"></i>Twitter
        </a>
        <a href="https://opensea.io/collection/crazycats-nft">
          <i class="fab fa-twitter"></i>OpenSea
        </a>
      </div>
    </>
  );
};

export default FAQ;
