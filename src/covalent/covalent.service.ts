import { CovalentClient, Chain, Quote } from "@covalenthq/client-sdk";
import { Injectable } from '@nestjs/common';

@Injectable()
export class CovalentService {

    client = new CovalentClient(process.env.COVALENT_API_KEY);
    availableCurrencies: Array<string> = ["USD", "CAD", "EUR", "SGD", "INR", "JPY", "VND", "CNY", "KRW", "RUB", "TRY", "NGN", "ARS", "AUD", "CHF", "GBP"];
    availableNetworks: Array<string> = ["btc-mainnet", "eth-mainnet", "matic-mainnet", "bsc-mainnet", "avalanche-mainnet", "optimism-mainnet", "fantom-mainnet", "arbitrum-goerli", "arbitrum-mainnet", "arbitrum-nova-mainnet", "avalanche-amplify-testnet", "bnb-antimatter-mainnet", "bnb-antimatter-testnet", "arbitrum-sepolia", "aurora-mainnet", "aurora-testnet", "avalanche-avacloud-testnet", "avalanche-testnet", "axie-mainnet", "base-mainnet", "base-sepolia-testnet", "base-testnet", "avalanche-beam-mainnet", "avalanche-beam-testnet", "avalanche-blitz-testnet", "bsc-testnet", "boba-bnb-mainnet", "boba-bnb-testnet", "boba-mainnet", "boba-goerli", "avalanche-bulletin-testnet", "canto-mainnet", "opside-cb-zkevm", "celo-mainnet", "gnosis-testnet", "avalanche-conduit-testnet", "covalent-internal-network-v1", "cronos-mainnet", "cronos-testnet", "crossfi-evm-testnet", "avalanche-d-chain-testnet", "opside-debox", "lumoz-decibling", "defi-kingdoms-mainnet", "defi-kingdoms-testnet", "avalanche-dexalot-mainnet", "avalanche-dexalot-testnet", "avalanche-dos", "opside-era7", "eth-goerli", "evmos-mainnet", "evmos-testnet", "fantom-testnet", "flarenetworks-flare-mainnet", "flarenetworks-flare-testnet", "bnb-fncy-mainnet", "bnb-fncy-testnet", "gnosis-mainnet", "avalanche-green-dot-testnet", "gunzilla-testnet", "harmony-mainnet", "harmony-testnet", "avalanche-hero-testnet", "eth-holesky", "horizen-eon-mainnet", "horizen-gobi-testnet", "horizen-yuma-testnet", "avalanche-hubble-exchange-testnet", "opside-jackbot", "avalanche-jono11-testnet", "kcc-mainnet", "kcc-testnet", "avalanche-kiwi-testnet", "opside-law-chain", "linea-mainnet", "linea-testnet", "avalanche-loco-legends-mainnet", "avalanche-loco-legends-testnet", "loot-mainnet", "avalanche-lt0-testnet", "avalanche-lt1-testnet", "avalanche-lt2-testnet", "avalanche-lt3-testnet", "avalanche-lt4-testnet", "avalanche-lt5-testnet", "opside-pre-alpha-testnet", "opside-public-zkevm", "lumoz-public-zksync-v2", "manta-testnet", "mantle-mainnet", "mantle-testnet", "avalanche-meld-mainnet", "avalanche-meld-testnet", "bnb-meta-apes-mainnet", "meter-mainnet", "meter-testnet", "metis-mainnet", "metis-stardust", "metis-testnet", "avalanche-miho-testnet", "milkomeda-a1-mainnet", "milkomeda-a1-devnet", "milkomeda-c1-mainnet", "milkomeda-c1-devnet", "avalanche-mintara-testnet", "avalanche-mirai-testnet", "mode-testnet", "avalanche-mondrian-testnet", "moonbeam-mainnet", "moonbeam-moonbase-alpha", "moonbeam-moonriver", "avalanche-nmac-testnet", "avalanche-numbers", "emerald-paratime-mainnet", "oasis-sapphire-mainnet", "oasis-sapphire-testnet", "oasys-mainnet", "oasys-testnet", "opside-odx-zkevm-testnet", "bnb-opbnb-mainnet", "bnb-opbnb-testnet", "optimism-goerli", "optimism-sepolia", "avalanche-orderly-testnet", "palm-mainnet", "palm-testnet", "avalanche-playa3ull-testnet", "matic-mumbai", "polygon-zkevm-mainnet", "polygon-zkevm-testnet", "pgn-mainnet", "pgn-testnet", "avalanche-pulsar-testnet", "opside-readon-content-testnet", "opside-relation", "rollux-mainnet", "rollux-testnet", "rsk-mainnet", "rsk-testnet", "scroll-mainnet", "scroll-alpha-testnet", "scroll-l2-testnet", "scroll-sepolia-testnet", "eth-sepolia", "avalanche-shrapnel-mainnet", "avalanche-shrapnel-testnet", "solana-mainnet", "flarenetworks-canary-mainnet", "flarenetworks-canary-testnet", "opside-soquest-zkevm", "lumoz-stark-sport", "avalanche-step-network", "sx-mainnet", "syndr-testnet", "taiko-katla-testnet", "telos-mainnet", "telos-testnet", "avalanche-thirdweb-testnet", "ultron-mainnet", "ultron-testnet", "avalanche-uptn", "opside-vip3", "tomochain-mainnet", "tomochain-testnet", "avalanche-wagmi-testnet", "xai-testnet", "avalanche-xanachain", "avalanche-xplus", "opside-xthrill", "zetachain-testnet", "zksync-mainnet", "zksync-testnet", "zora-mainnet", "zora-testnet", "opside-zkmeta", "neon-mainnet", "neon-testnet", "skale-battleground", "skale-nebula", "energi-mainnet", "energi-testnet", "clv-parachain", "findora-mainnet", "findora-forge-testnet", "bittorrent-mainnet", "bittorrent-testnet", "skale-exorde", "skale-europa", "skale-staging-lcc", "skale-omnus", "skale-razor", "skale-mainnet", "skale-calypso", "skale-staging-uum", "gather-mainnet", "gather-testnet", "boba-bobabeam-mainnet", "boba-bobabase-testnet", "boba-avalanche-mainnet", "boba-avalanche-testnet", "swimmer-mainnet", "swimmer-testnet", "astar-shiden", "iotex-mainnet", "iotex-testnet", "astar-mainnet", "astar-shibuya", "nervos-godwoken-mainnet", "nervos-godwoken-testnet", "heco-mainnet", "heco-testnet", "klaytn-mainnet", "klaytn-testnet"]

    convertBigIntToString(obj) {
        for (const key in obj) {
            if (obj.hasOwnProperty(key)) {
                if (typeof obj[key] === 'bigint') {
                    obj[key] = obj[key].toString();
                } else if (typeof obj[key] === 'object') {
                    obj[key] = this.convertBigIntToString(obj[key]);
                }
            }
        }
        return obj;
    }

    /**
     * Returns token balances of the given wallet
     */
    async walletTokensBalance({
        chain = "eth-mainnet",
        address
    }: {
        chain?: Chain,
        address: string
    }) {
        if (!this.availableNetworks?.includes(chain)) return { error: "Unsupported network" };

        const response = await this.client.BalanceService.getTokenBalancesForWalletAddress(chain, address);
        if (response?.error) return { error: response?.error_message }
        return { ...this.convertBigIntToString(response?.data) };
    }

    /**
     * Returns historical token balances for address
     */
    async walletHistoricalBalance({
        chain = "eth-mainnet",
        address
    }: {
        chain?: Chain,
        address: string
    }) {
        if (!this.availableNetworks?.includes(chain)) return { error: "Unsupported network" };

        const response = await this.client.BalanceService.getHistoricalTokenBalancesForWalletAddress(chain, address);
        if (response?.error) return { error: response?.error_message }
        return { ...this.convertBigIntToString(response?.data) };
    }

    /**
     * Returns "native" token balance of the given wallet
     */
    async walletNativeBalance({
        chain = "eth-mainnet",
        address
    }: {
        chain?: Chain,
        address: string
    }) {
        if (!this.availableNetworks?.includes(chain)) return { error: "Unsupported network" };

        const response = await this.client.BalanceService.getNativeTokenBalance(chain, address);
        if (response?.error) return { error: response?.error_message }
        return { ...this.convertBigIntToString(response?.data) };
    }

    /**
     * Get a transaction's details
     */
    async getTransaction({
        chain = "eth-mainnet",
        tx
    }: {
        chain?: Chain,
        tx: string
    }) {
        if (!this.availableNetworks?.includes(chain)) return { error: "Unsupported network" };

        const response = await this.client.TransactionService.getTransaction(chain, tx);
        if (response?.error) return { error: response?.error_message }
        return { ...this.convertBigIntToString(response?.data) };
    }

    /**
     * Get a transaction summary of the given wallet
     */
    async getTransactionSummary({
        chain = "eth-mainnet",
        address
    }: {
        chain?: Chain,
        address: string
    }) {
        if (!this.availableNetworks?.includes(chain)) return { error: "Unsupported network" };

        const response = await this.client.TransactionService.getTransactionSummary(chain, address);
        if (response?.error) return { error: response?.error_message }
        return { ...this.convertBigIntToString(response?.data) };
    }

    /**
     * Get token approvals of the given wallet
     */
    async getTokenApprovals({
        chain = "eth-mainnet",
        address
    }: {
        chain?: Chain,
        address: string
    }) {
        if (!this.availableNetworks?.includes(chain)) return { error: "Unsupported network" };

        const response = await this.client.SecurityService.getApprovals(chain, address);
        if (response?.error) return { error: response?.error_message }
        return { ...this.convertBigIntToString(response?.data) };
    }

    /**
     * Price history of a token
     * 
     * @param contractAddress Contract address of the token
     * @param from The start day of the historical price range (YYYY-MM-DD)
     * @param to The end day of the historical price range (YYYY-MM-DD).
     */
    async getTokenPrices({
        contractAddress,
        chain = "eth-mainnet",
        currency = "USD",
        from,
        to
    }: {
        contractAddress: string,
        chain?: Chain,
        currency?: Quote,
        from?: string,
        to?: string
    }) {
        if (!this.availableNetworks?.includes(chain)) return { error: "Unsupported network" };
        if (!this.availableCurrencies.includes(currency)) return { error: "Unsupported currency" }

        let response: any;

        if (from && to)
            response = await this.client.PricingService.getTokenPrices(chain, currency, contractAddress, { from, to });
        else
            response = await this.client.PricingService.getTokenPrices(chain, currency, contractAddress);

        if (response?.error) return { error: response?.error_message }
        return { ...this.convertBigIntToString(response?.data) };
    }
}