import {
    Controller,
    Get,
    Param,
} from '@nestjs/common';
import { CovalentService } from './covalent.service';
import { Chain, Quote } from '@covalenthq/client-sdk';

@Controller('covalent')
export class CovalentController {
    constructor(private readonly covalentService: CovalentService) {
        this.covalentService = covalentService;
    }

    @Get("/wallet-balance")
    walletBalance(@Param('address') address: string, @Param('chain') chain?: Chain) {
        return this.covalentService.walletBalance(address, chain);
    }

    @Get("/historical-balance")
    historicalBalance(@Param('address') address: string, @Param('chain') chain?: Chain) {
        return this.covalentService.historicalBalance(address, chain);
    }

    @Get("/native-balance")
    nativeBalance(@Param('address') address: string, @Param('chain') chain?: Chain) {
        return this.covalentService.nativeBalance(address, chain);
    }

    @Get("/tx")
    tx(@Param('tx') tx: string, @Param('chain') chain?: Chain) {
        return this.covalentService.tx(tx, chain);
    }

    @Get("/tx-summary")
    txSummary(@Param('address') address: string, @Param('chain') chain?: Chain) {
        return this.covalentService.txSummary(address, chain);
    }

    @Get("/token-approvals")
    tokenApprovals(@Param('address') address: string, @Param('chain') chain?: Chain) {
        return this.covalentService.tokenApprovals(address, chain);
    }

    @Get("/token-price")
    tokenPriceHistory(
        @Param('address') contractAddress: string,
        @Param('chain') chain?: Chain,
        @Param('currency') currency?: Quote,
        @Param('from') from?: string,
        @Param('to') to?: string
    ) {
        return this.covalentService.tokenPriceHistory(contractAddress, chain, currency, from, to);
    }
}