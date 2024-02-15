import {
    Controller,
    Get,
    Query,
} from '@nestjs/common';
import { CovalentService } from './covalent.service';
import { Chain, Quote } from '@covalenthq/client-sdk';

@Controller('covalent')
export class CovalentController {
    constructor(private readonly covalentService: CovalentService) { }

    @Get("/wallet-balance")
    async walletTokensBalance(@Query('address') address: string, @Query('chain') chain?: Chain) {
        return await this.covalentService.walletTokensBalance({ address, chain });
    }

    @Get("/historical-balance")
    async walletHistoricalBalance(@Query('address') address: string, @Query('chain') chain?: Chain) {
        return await this.covalentService.walletHistoricalBalance({ address, chain });
    }

    @Get("/native-balance")
    async walletNativeBalance(@Query('address') address: string, @Query('chain') chain?: Chain) {
        return await this.covalentService.walletNativeBalance({ address, chain });
    }

    @Get("/tx")
    async getTransaction(@Query('tx') tx: string, @Query('chain') chain?: Chain) {
        return await this.covalentService.getTransaction({ tx, chain });
    }

    @Get("/tx-summary")
    async getTransactionSummary(@Query('address') address: string, @Query('chain') chain?: Chain) {
        return await this.covalentService.getTransactionSummary({ address, chain });
    }

    @Get("/token-approvals")
    async getTokenApprovals(@Query('address') address: string, @Query('chain') chain?: Chain) {
        return await this.covalentService.getTokenApprovals({ address, chain });
    }

    @Get("/token-price")
    async getTokenPrices(
        @Query('address') contractAddress: string,
        @Query('chain') chain?: Chain,
        @Query('currency') currency?: Quote,
        @Query('from') from?: string,
        @Query('to') to?: string
    ) {
        return await this.covalentService.getTokenPrices({ contractAddress, chain, currency, from, to });
    }
}