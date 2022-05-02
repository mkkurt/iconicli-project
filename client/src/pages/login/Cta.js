import React from "react";
import styled from "styled-components";

function Cta() {
  return (
    <Wrapper>
      <MainSvg />
      <CtaText>
        If you are not a member yet,
        <br />
        you can sign up here!
      </CtaText>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CtaText = styled.div`
  font-family: "Poppins";
  font-weight: 400;
  font-size: 24px;
  line-height: 40px;
  color: #000000;
`;

const MainSvg = () => (
  <svg
    width="431"
    height="338"
    viewBox="0 0 431 338"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g filter="url(#filter0_f_0_1)">
      <circle
        cx="169"
        cy="169"
        r="119"
        fill="url(#paint0_diamond_0_1)"
        fillOpacity="0.8"
      />
    </g>
    <path
      d="M73.48 147.92V176H89.28V170.72H80.32V147.92H73.48ZM114.383 164.84C114.383 157.76 109.343 153.36 102.783 153.36C96.2625 153.36 91.1825 157.76 91.1825 164.84C91.1825 171.92 96.1425 176.32 102.703 176.32C109.263 176.32 114.383 171.92 114.383 164.84ZM98.1425 164.84C98.1425 161.04 100.303 159.28 102.783 159.28C105.183 159.28 107.423 161.04 107.423 164.84C107.423 168.6 105.143 170.4 102.703 170.4C100.223 170.4 98.1425 168.6 98.1425 164.84ZM116.651 164.8C116.651 171.84 121.011 176.32 126.491 176.32C129.771 176.32 132.131 174.76 133.371 172.8V175.96C133.371 179.72 131.331 181.08 128.731 181.08C126.371 181.08 124.691 180 124.251 178.32H117.491C118.091 183.64 122.411 187 129.051 187C136.771 187 140.211 181.92 140.211 175.96V153.68H133.371V156.84C132.171 154.84 129.771 153.36 126.491 153.36C121.011 153.36 116.651 157.76 116.651 164.8ZM133.371 164.84C133.371 168.4 131.091 170.36 128.491 170.36C125.931 170.36 123.611 168.36 123.611 164.8C123.611 161.24 125.931 159.32 128.491 159.32C131.091 159.32 133.371 161.28 133.371 164.84ZM153.636 176H160.476V153.68H153.636V176ZM157.076 151.36C159.476 151.36 161.116 149.72 161.116 147.68C161.116 145.6 159.476 143.96 157.076 143.96C154.636 143.96 152.996 145.6 152.996 147.68C152.996 149.72 154.636 151.36 157.076 151.36ZM180.833 176H187.633V162.96C187.633 156.96 184.193 153.44 179.033 153.44C176.033 153.44 173.633 154.76 172.273 156.64V153.68H165.433V176H172.273V163.88C172.273 160.84 173.953 159.16 176.553 159.16C179.153 159.16 180.833 160.84 180.833 163.88V176ZM201.943 168.24C201.943 174.04 205.183 176 209.823 176H213.303V170.2H210.863C209.343 170.2 208.783 169.64 208.783 168.32V159.36H213.263V153.68H208.783V148.24H201.943V153.68H199.223V159.36H201.943V168.24ZM238.953 164.84C238.953 157.76 233.913 153.36 227.353 153.36C220.833 153.36 215.753 157.76 215.753 164.84C215.753 171.92 220.713 176.32 227.273 176.32C233.833 176.32 238.953 171.92 238.953 164.84ZM222.713 164.84C222.713 161.04 224.873 159.28 227.353 159.28C229.753 159.28 231.993 161.04 231.993 164.84C231.993 168.6 229.713 170.4 227.273 170.4C224.793 170.4 222.713 168.6 222.713 164.84ZM249.698 164.84C249.698 171.92 254.338 176.32 260.898 176.32C266.498 176.32 270.458 173.08 271.618 167.92H264.338C263.738 169.56 262.658 170.48 260.778 170.48C258.338 170.48 256.658 168.56 256.658 164.84C256.658 161.12 258.338 159.2 260.778 159.2C262.658 159.2 263.778 160.2 264.338 161.76H271.618C270.458 156.44 266.498 153.36 260.898 153.36C254.338 153.36 249.698 157.8 249.698 164.84ZM297.117 164.84C297.117 157.76 292.077 153.36 285.517 153.36C278.997 153.36 273.917 157.76 273.917 164.84C273.917 171.92 278.877 176.32 285.437 176.32C291.997 176.32 297.117 171.92 297.117 164.84ZM280.877 164.84C280.877 161.04 283.037 159.28 285.517 159.28C287.917 159.28 290.157 161.04 290.157 164.84C290.157 168.6 287.877 170.4 285.437 170.4C282.957 170.4 280.877 168.6 280.877 164.84ZM316.146 176H322.946V162.96C322.946 156.96 319.506 153.44 314.346 153.44C311.346 153.44 308.946 154.76 307.586 156.64V153.68H300.746V176H307.586V163.88C307.586 160.84 309.266 159.16 311.866 159.16C314.466 159.16 316.146 160.84 316.146 163.88V176ZM328.779 168.24C328.779 174.04 332.019 176 336.659 176H340.139V170.2H337.699C336.179 170.2 335.619 169.64 335.619 168.32V159.36H340.099V153.68H335.619V148.24H328.779V153.68H326.059V159.36H328.779V168.24ZM343.949 176H350.789V153.68H343.949V176ZM347.389 151.36C349.789 151.36 351.429 149.72 351.429 147.68C351.429 145.6 349.789 143.96 347.389 143.96C344.949 143.96 343.309 145.6 343.309 147.68C343.309 149.72 344.949 151.36 347.389 151.36ZM371.146 176H377.946V162.96C377.946 156.96 374.506 153.44 369.346 153.44C366.346 153.44 363.946 154.76 362.586 156.64V153.68H355.746V176H362.586V163.88C362.586 160.84 364.266 159.16 366.866 159.16C369.466 159.16 371.146 160.84 371.146 163.88V176ZM404.739 153.68H397.899V165.8C397.899 168.84 396.219 170.52 393.579 170.52C391.019 170.52 389.299 168.84 389.299 165.8V153.68H382.499V166.72C382.499 172.68 385.979 176.24 391.139 176.24C394.139 176.24 396.539 174.88 397.899 172.96V176H404.739V153.68ZM419.492 158.84C421.772 158.84 423.692 160.24 423.692 162.68H415.132C415.532 160.2 417.252 158.84 419.492 158.84ZM430.172 168.6H422.892C422.332 169.8 421.252 170.76 419.332 170.76C417.132 170.76 415.332 169.4 415.092 166.48H430.572C430.652 165.8 430.692 165.12 430.692 164.48C430.692 157.68 426.092 153.36 419.572 153.36C412.932 153.36 408.292 157.76 408.292 164.84C408.292 171.92 413.012 176.32 419.572 176.32C425.132 176.32 429.092 172.96 430.172 168.6ZM74.56 228.24C74.56 234.04 77.8 236 82.44 236H85.92V230.2H83.48C81.96 230.2 81.4 229.64 81.4 228.32V219.36H85.88V213.68H81.4V208.24H74.56V213.68H71.84V219.36H74.56V228.24ZM89.73 236H96.57V223.88C96.57 220.84 98.25 219.16 100.85 219.16C103.45 219.16 105.13 220.84 105.13 223.88V236H111.93V222.96C111.93 216.96 108.53 213.44 103.45 213.44C100.37 213.44 97.93 214.76 96.57 216.68V206.4H89.73V236ZM126.523 218.84C128.803 218.84 130.723 220.24 130.723 222.68H122.163C122.563 220.2 124.283 218.84 126.523 218.84ZM137.203 228.6H129.923C129.363 229.8 128.283 230.76 126.363 230.76C124.163 230.76 122.363 229.4 122.123 226.48H137.603C137.683 225.8 137.723 225.12 137.723 224.48C137.723 217.68 133.123 213.36 126.603 213.36C119.963 213.36 115.323 217.76 115.323 224.84C115.323 231.92 120.043 236.32 126.603 236.32C132.163 236.32 136.123 232.96 137.203 228.6ZM153.208 211.36C155.608 211.36 157.248 209.72 157.248 207.68C157.248 205.6 155.608 203.96 153.208 203.96C150.768 203.96 149.128 205.6 149.128 207.68C149.128 209.72 150.768 211.36 153.208 211.36ZM149.808 213.68V238.96C149.808 240.28 149.248 240.84 147.728 240.84H146.088V246.64H148.768C153.408 246.64 156.648 244.68 156.648 238.88V213.68H149.808ZM183.406 224.84C183.406 217.76 178.366 213.36 171.806 213.36C165.286 213.36 160.206 217.76 160.206 224.84C160.206 231.92 165.166 236.32 171.726 236.32C178.286 236.32 183.406 231.92 183.406 224.84ZM167.166 224.84C167.166 221.04 169.326 219.28 171.806 219.28C174.206 219.28 176.446 221.04 176.446 224.84C176.446 228.6 174.166 230.4 171.726 230.4C169.246 230.4 167.166 228.6 167.166 224.84ZM209.075 213.68H202.235V225.8C202.235 228.84 200.555 230.52 197.915 230.52C195.355 230.52 193.635 228.84 193.635 225.8V213.68H186.835V226.72C186.835 232.68 190.315 236.24 195.475 236.24C198.475 236.24 200.875 234.88 202.235 232.96V236H209.075V213.68ZM220.828 225.64C220.828 221.8 222.708 220.68 225.948 220.68H227.828V213.44C224.828 213.44 222.388 215.04 220.828 217.4V213.68H213.988V236H220.828V225.64ZM246.497 236H253.297V222.96C253.297 216.96 249.857 213.44 244.697 213.44C241.697 213.44 239.297 214.76 237.937 216.64V213.68H231.097V236H237.937V223.88C237.937 220.84 239.617 219.16 242.217 219.16C244.817 219.16 246.497 220.84 246.497 223.88V236ZM267.89 218.84C270.17 218.84 272.09 220.24 272.09 222.68H263.53C263.93 220.2 265.65 218.84 267.89 218.84ZM278.57 228.6H271.29C270.73 229.8 269.65 230.76 267.73 230.76C265.53 230.76 263.73 229.4 263.49 226.48H278.97C279.05 225.8 279.09 225.12 279.09 224.48C279.09 217.68 274.49 213.36 267.97 213.36C261.33 213.36 256.69 217.76 256.69 224.84C256.69 231.92 261.41 236.32 267.97 236.32C273.53 236.32 277.49 232.96 278.57 228.6ZM292.979 227.64L287.819 213.68H280.179L289.259 235.24L284.139 246.6H291.499L305.499 213.68H298.099L292.979 227.64Z"
      fill="#1F0045"
    />
    <defs>
      <filter
        id="filter0_f_0_1"
        x="0"
        y="0"
        width="338"
        height="338"
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="BackgroundImageFix"
          result="shape"
        />
        <feGaussianBlur stdDeviation="25" result="effect1_foregroundBlur_0_1" />
      </filter>
      <radialGradient
        id="paint0_diamond_0_1"
        cx="0"
        cy="0"
        r="1"
        gradientUnits="userSpaceOnUse"
        gradientTransform="translate(169 169) rotate(90) scale(119 139.395)"
      >
        <stop offset="0.311918" stopColor="#8C52FF" stopOpacity="0.6" />
        <stop offset="0.623397" stopColor="#8C52FF" stopOpacity="0.3" />
        <stop offset="1" stopColor="#8C52FF" stopOpacity="0.2" />
      </radialGradient>
    </defs>
  </svg>
);

export default Cta;