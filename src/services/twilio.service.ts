import { Twilio } from "twilio";

class TwilioServices {
  twilioClient = new Twilio(
    "AC3c9977ae29ec3d6442d50e72f3390a46",
    "da5737eccba646b48ad63fc7d7c65fbe"
  );

  public async SendOtp(mobile: string) {
    return await this.twilioClient.verify.v2
      .services("VAff0b458f03b5d2fae87989884d085141")
      .verifications.create({ to: `+91${mobile}`, channel: "sms" });
  }

  public async VerifyOtp({ mobile, otp }: { mobile: string; otp: string }) {
    return await this.twilioClient.verify.v2
      .services("VAff0b458f03b5d2fae87989884d085141")
      .verificationChecks.create({ to: `+91${mobile}`, code: otp });
  }
}

export const TwilioService = new TwilioServices();
