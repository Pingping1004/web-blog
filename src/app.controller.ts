import { Controller, Get, Req, Res, Render, UseGuards } from '@nestjs/common';
import { Response } from 'express';
import { AppService } from './app.service';
import { GoogleAuthGuard } from './auth/google-auth.guard';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  async RenderIndex(@Req() req: Request, @Res() res: Response) {
    const userId = 1;
    console.log('Index ejs is rendered !!!');
    res.render('index', { userId });
  }

  @Get('/')
  @Render('index')
  index() {
    return 'Index ejs run';
  }
}
