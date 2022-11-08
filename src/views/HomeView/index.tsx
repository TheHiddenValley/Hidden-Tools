import Link from "next/link";
import { FC, useState } from "react";
import { useWallet } from "@solana/wallet-adapter-react";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";

import { SolanaLogo, ConnectWallet } from "components";
import styles from "./index.module.css";

const walletPublicKey = "";

export const HomeView: FC = ({ }) => {
  const { publicKey } = useWallet();
  const [walletToParsePublicKey, setWalletToParsePublicKey] =
    useState<string>(walletPublicKey);

  const onUseWalletClick = () => {
    if (publicKey) {
      setWalletToParsePublicKey(publicKey?.toBase58());
    }
  };

  return (
    <div className="container mx-auto max-w-6xl p-8 2xl:px-0">
      <div className={styles.container}>
        <div className="navbar mb-2 shadow-lg bg-neutral text-neutral-content rounded-box flex justify-around">
          <div className="flex-1 px-2">
            <div className="text-sm breadcrumbs">
              <ul className="text-xs sm:text-xl">
                <li>
                  <Link href="/">
                    <a> </a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex-none">
            <WalletMultiButton className="btn btn-ghost" />
            <ConnectWallet onUseWalletClick={onUseWalletClick} />
          </div>
        </div>

        <div className="text-center pt-2">
          <div className="hero min-h-16 py-4">
            <div className="text-center hero-content">
              <div className="max-w-lg">
                <h1 className="mb-5 text-5xl font-bold">
                  Hidden Tools
                </h1>
                <p className="mb-2">
                  You're Welcome.
                </p>
              </div>
            </div>
          </div>

          <div className="max-w-4xl mx-auto">
            {/* <h1 className="mb-2 pb-8 text-5xl">Available tools :</h1> */}
            <ul className="text-left leading-10">
              <li className="mb-5">
                <Link href="/gallery">
                  <div className="p-4 hover:border">
                    <a className="text-4xl font-bold mb-5">
                      NFT Incinerator
                    </a>
                    <div>Burn Solana NFTs and get SOL back, make sure not to burn your official ones.</div></div>
                </Link>

              </li>
              <li className="mb-5">
                <Link href="/burnSPL">
                  <div className="p-4 hover:border">
                    <a className="text-4xl font-bold mb-5">
                      Ponzi Coin Burner
                    </a>
                    <div>Burn your shit coins here!</div></div>
                </Link>

              </li>
              <li className="mb-5">
                <Link href="/closeaccount">
                  <div className="p-4 hover:border">
                    <a className="text-4xl font-bold mb-5">
                      Account Closer
                    </a>
                    <div>Close empty account of unused tokens and get SOL back.</div></div>
                </Link>

              </li>
              <li className="mb-5">
                <Link href="/revoke">
                  <div className="p-4 hover:border">
                    <a className="text-4xl font-bold mb-5">
                      Revoke authority
                    </a>
                    <div>Make sure to use this to revoke sus things!</div></div>
                </Link>

              </li>
              <li className="mb-5">
                <Link href="/multisender">
                  <div className="p-4 hover:border">
                    <a className="mb-5 text-4xl font-bold">
                      Bulk Sender
                    </a>
                    <div>Send multiple tokens in 1 transaction!</div>
                  </div>
                </Link>

              </li>
              <li className="mb-5">
                <Link href="/suatmm">
                  <div className="p-4 hover:border">
                    <a className="text-4xl font-bold mb-5">
                      NFT Messenger
                    </a>
                    <div>Send NFT messages to your Web 3.0 Crush.</div>
                  </div>
                </Link>

              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
