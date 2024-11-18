import { Typography } from "./design-system";

export default function PennyCount() {
  return (
    <div className="bg-white text-center sm:px-[16px] md:px-[100px] py-[50px] pt-[50px]">
      <Typography size="h2" className="text-primary-950 block">
        Make every penny count
      </Typography>
      <Typography size="xl" className="text-netural-900 mt-[15px] block">
        Spend smarter, lower your bills, get cashback on everything you buy,
        <br />  and unlock credit to grow your business.
      </Typography>
    </div>
  );
}
