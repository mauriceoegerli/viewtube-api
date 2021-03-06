import { Controller, UseGuards, Get, Req } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/guards/jwt.guard';
import { UserprofileDto } from 'src/user/dto/userprofile.dto';

@ApiTags('User')
@Controller('user')
export class UserController {

  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile(@Req() req: any): UserprofileDto {
    return {
      username: req.user.username
    };
  }
}
