import { Chain, Quote } from '@covalenthq/client-sdk';
import { Injectable } from '@nestjs/common';
import Covalent from './covalent.js';

@Injectable()
export class CovalentService {

    covalent: Covalent;

    constructor(private covalentService: CovalentService) {
        this.covalent = new Covalent(process.env.COVALENT_API_KEY);
    }

    async walletBalance(address: string, chain?: Chain) {
        return await this.covalent.walletTokensBalance({ chain, address })
    }

    async historicalBalance(address: string, chain?: Chain) {
        return await this.covalent.walletHistoricalBalance({ chain, address })
    }

    async nativeBalance(address: string, chain?: Chain) {
        return await this.covalent.walletNativeBalance({ chain, address })
    }

    async tx(tx: string, chain?: Chain) {
        return await this.covalent.getTransaction({ chain, tx })
    }

    async txSummary(address: string, chain?: Chain) {
        return await this.covalent.getTransactionSummary({ chain, address })
    }

    async tokenApprovals(address: string, chain?: Chain) {
        return await this.covalent.getTokenApprovals({ chain, address })
    }

    async tokenPriceHistory(contractAddress: string, chain?: Chain, currency?: Quote, from?: string, to?: string) {
        return await this.covalent.getTokenPrices({ chain, contractAddress, currency, from, to })
    }
}