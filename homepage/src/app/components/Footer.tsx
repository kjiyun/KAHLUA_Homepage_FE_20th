import Image from "next/image";
import Link from "next/link";

interface SocialIconProps {
  href: string;
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
}

const SocialIcon: React.FC<SocialIconProps> = ({ href, src, alt, width, height, className }) => (
  <li className="rounded-full bg-[#8E8E8E] ml-[4px] mt-[4px] w-[20px] h-[20px] sm:w-[28px] sm:h-[28px]">
    <Link href={href} target="_blank" passHref>
      <Image src={src} alt={alt} width={width} height={height} className={className} />
    </Link>
  </li>
);

export default function Footer() {
  return (
    <div className="w-full h-[100px] sm:h-[240px] relative bg-[#EEEEEE] bottom-0 font-['pretendard'] min-w-[100%]">
      <div className="flex flex-col w-full ">
      <ul className="flex mt-[10px] sm:mt-[60px] mr-[4px] items-center justify-center gap-2">
      <SocialIcon href="http://pf.kakao.com/_UaIZG" src="/assets/images/layout/kakaotalk.svg" alt="kakaotalk" width={28} height={28} className="w-[20px] h-[20px] sm:w-[28px] sm:h-[28px]"/>
      <SocialIcon href="https://instagram.com/kahlua_band_?igshid=MzRlODBiNWFlZA==" src="/assets/images/layout/instagram.svg" alt="instagram" width={28} height={28} className="w-[20px] h-[20px] sm:w-[28px] sm:h-[28px]" />
      <SocialIcon href="https://www.youtube.com/@kahluaband8409" src="/assets/images/layout/youtube.svg" alt="youtube" width={28} height={28} className="mx-[0.8px] w-[20px] h-[20px] sm:w-[28px] sm:h-[28px]" />
      <SocialIcon href="https://github.com/kahluaband" src="/assets/images/layout/foot_github.svg" alt="github" width={18} height={18} className="mx-auto my-[3.9px] sm:my-[4.9px] w-[12px] h-[12px] sm:w-[18px] sm:h-[18px]" />
    </ul>
      </div>
      <div className="flex item-center justify-center mt-[10px] sm:mt-[21px]">
        <svg xmlns="http://www.w3.org/2000/svg" width="150" height="27" viewBox="0 0 150 27" fill="none" className="sm:w-[150px] sm:h-[27px] w-[120px] h-[20px]">
          <path
            d="M10.6547 6.71213L16.0627 0.984133H19.4547C21.7161 0.984133 22.8467 1.01613 22.8467 1.08013C22.8467 1.1228 22.6761 1.3148 22.3347 1.65613C22.2707 1.72013 20.6814 3.3308 17.5667 6.48813L13.3107 10.8081L18.5587 18.2321C22.0574 23.1601 23.8067 25.6348 23.8067 25.6561C23.8067 25.6988 22.6547 25.7201 20.3507 25.7201H16.8947C13.6521 20.8135 11.2094 17.1441 9.56672 14.7121C8.20139 16.0775 7.17739 17.1121 6.49472 17.8161V25.7201H0.990723V16.9201L3.13472 14.6481C3.34806 14.4348 4.36139 13.3681 6.17472 11.4481C8.00939 9.5068 9.50272 7.92813 10.6547 6.71213ZM0.990723 5.84813V0.984133H6.49472V4.82413L3.80672 7.70413C2.01472 9.6668 1.10806 10.6481 1.08672 10.6481C1.06539 10.6695 1.04406 10.4988 1.02272 10.1361C1.02272 9.75213 1.01206 9.17613 0.990723 8.40813C0.990723 7.64013 0.990723 6.7868 0.990723 5.84813Z"
            fill="#6A6A6A"
          />
          <path
            d="M32.2662 12.8561L36.8422 0.728132H42.6342L47.2742 13.1441C48.0209 15.1495 48.7889 17.2081 49.5782 19.3201C50.3676 21.4108 50.9649 22.9895 51.3702 24.0561C51.7969 25.1441 52.0102 25.6988 52.0102 25.7201C52.0316 25.7628 52.0209 25.7948 51.9782 25.8161C51.9569 25.8375 51.8396 25.8588 51.6262 25.8801C51.4342 25.9015 51.1462 25.9121 50.7622 25.9121C50.3996 25.9121 49.8662 25.9121 49.1622 25.9121H46.2182L43.0822 16.6961C41.0982 10.9148 39.9996 7.7468 39.7862 7.19213C39.7862 7.1708 39.7756 7.1388 39.7542 7.09613C39.7542 7.03213 39.7436 7.00013 39.7222 7.00013C39.6796 7.00013 38.3676 10.6375 35.7862 17.9121L32.9702 25.8481C32.3516 25.8695 31.4129 25.8801 30.1542 25.8801C28.8956 25.8801 27.9569 25.8908 27.3382 25.9121L27.4982 25.4641C27.5196 25.4001 27.7329 24.8135 28.1382 23.7041C28.5649 22.6161 29.1729 21.0161 29.9622 18.9041C30.7729 16.7921 31.5409 14.7761 32.2662 12.8561Z"
            fill="#6A6A6A"
          />
          <path
            d="M71.0465 26.0721V0.824133H76.7425V26.0721H71.0465ZM55.3345 26.0721V0.824133H61.0305V10.4561H65.7025C66.2145 10.4561 66.7051 10.4561 67.1745 10.4561C67.6651 10.4561 68.1025 10.4668 68.4865 10.4881C68.8705 10.4881 69.2011 10.4881 69.4785 10.4881C69.7771 10.4881 70.0011 10.4988 70.1505 10.5201H70.3745L68.0065 12.8881L65.7025 15.1921H61.0305V26.0721H55.3345Z"
            fill="#6A6A6A"
          />
          <path
            d="M82.8722 23.2241L85.4002 21.0801H97.4642V25.7201H88.7602C83.0216 25.7201 80.1522 25.6775 80.1522 25.5921C80.1522 25.5708 80.1629 25.5495 80.1842 25.5281C80.2056 25.5068 80.3336 25.3895 80.5682 25.1761C80.8029 24.9841 81.1549 24.6855 81.6242 24.2801C82.0936 23.8961 82.5096 23.5441 82.8722 23.2241ZM79.9602 10.0401V0.984133H85.4642V14.4241L82.8402 16.6641C81.0269 18.2215 80.1096 19.0108 80.0882 19.0321C80.0669 19.0535 80.0456 18.9361 80.0242 18.6801C80.0029 18.4241 79.9816 17.9548 79.9602 17.2721C79.9602 16.5681 79.9602 15.6508 79.9602 14.5201C79.9602 13.3681 79.9602 11.8748 79.9602 10.0401Z"
            fill="#6A6A6A"
          />
          <path
            d="M116.387 8.31213V0.536133H121.859V8.40813C121.859 13.2295 121.827 16.1521 121.763 17.1761C121.507 19.5441 120.803 21.3788 119.651 22.6801C118.521 23.9815 116.835 24.8881 114.595 25.4001C113.891 25.5708 112.75 25.6561 111.171 25.6561C109.593 25.6561 108.761 25.6241 108.675 25.5601C108.654 25.5601 108.643 25.5495 108.643 25.5281C108.643 25.4428 109.593 24.6001 111.491 23.0001C113.433 21.3575 114.542 20.4401 114.819 20.2481C115.609 19.6721 116.099 18.5628 116.291 16.9201C116.355 16.4508 116.387 13.5815 116.387 8.31213ZM102.947 0.600132C104.313 0.600132 105.23 0.578799 105.699 0.536133H106.339L106.371 9.11213C106.393 14.8721 106.446 17.8801 106.531 18.1361C106.787 18.8188 107.107 19.3735 107.491 19.8001C107.747 20.0988 107.833 20.2801 107.747 20.3441C107.47 20.6001 106.745 21.2188 105.571 22.2001C104.419 23.1601 103.822 23.6401 103.779 23.6401C103.737 23.6401 103.502 23.4055 103.075 22.9361C102.201 21.9761 101.571 20.7708 101.187 19.3201L100.899 18.2641C100.878 16.3015 100.867 13.3681 100.867 9.46413C100.867 5.5388 100.857 2.5948 100.835 0.632132L102.947 0.600132Z"
            fill="#6A6A6A"
          />
          <path
            d="M130.141 12.8561L134.717 0.728132H140.509L145.149 13.1441C145.896 15.1495 146.664 17.2081 147.453 19.3201C148.243 21.4108 148.84 22.9895 149.245 24.0561C149.672 25.1441 149.885 25.6988 149.885 25.7201C149.907 25.7628 149.896 25.7948 149.853 25.8161C149.832 25.8375 149.715 25.8588 149.501 25.8801C149.309 25.9015 149.021 25.9121 148.637 25.9121C148.275 25.9121 147.741 25.9121 147.037 25.9121H144.093L140.957 16.6961C138.973 10.9148 137.875 7.7468 137.661 7.19213C137.661 7.1708 137.651 7.1388 137.629 7.09613C137.629 7.03213 137.619 7.00013 137.597 7.00013C137.555 7.00013 136.243 10.6375 133.661 17.9121L130.845 25.8481C130.227 25.8695 129.288 25.8801 128.029 25.8801C126.771 25.8801 125.832 25.8908 125.213 25.9121L125.373 25.4641C125.395 25.4001 125.608 24.8135 126.013 23.7041C126.44 22.6161 127.048 21.0161 127.837 18.9041C128.648 16.7921 129.416 14.7761 130.141 12.8561Z"
            fill="#6A6A6A"
          />
        </svg>
      </div>
      <div className="sm:mt-[20px]">
        <div className="mt-[10px] sm:mt-[16px] flex item-center justify-center">
          <div className="text-[8px] sm:text-[12px] text-[#6A6A6A] font-[600] tracking-[0.015rem] leading-5">© 2023 KAHLUA. All rights reserved.</div>
        </div>
      </div>
    </div>
  );
}
