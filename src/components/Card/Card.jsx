import "./_Card.scss"
import Boutons from "../Boutons/Boutons"

export default function Card(props) {
  return (
    <div className="card">
      <div className="icon">
        {
          {
            design: (
              <svg
                width="67"
                height="66"
                viewBox="0 0 67 66"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M42.8043 5.88385C39.9765 4.37189 36.6781 4.11299 33.6721 5.15381L13.8434 10.6303C10.714 11.2841 7.98306 13.2082 6.2676 15.9749C4.79427 18.8854 4.53861 22.2785 5.55253 25.3911L10.8528 45.7805C11.4846 48.9986 13.3519 51.8054 16.0397 53.5666C18.8674 55.0785 22.1658 55.3374 25.1931 54.2907L45.0218 48.8142C48.13 48.1664 50.8821 46.2364 52.5976 43.4696C54.0497 40.565 54.3266 37.1661 53.3126 34.0535L48.0123 13.6641C47.3593 10.4518 45.492 7.64506 42.8043 5.88385Z"
                  fill="url(#paint0_linear)"
                />
                <g opacity="0.5" filter="url(#filter0_f)">
                  <path
                    d="M33.4823 7.64378L15.2417 12.8737C8.62545 14.7707 5.72338 19.3767 7.3515 25.3765L12.8658 45.697C14.5206 51.7951 19.3017 54.1134 25.918 52.2164L44.1585 46.9865C50.8815 45.0589 53.6961 40.5627 52.0412 34.4646L46.527 14.1441C44.8988 8.14436 40.2052 5.71618 33.4823 7.64378Z"
                    fill="#FA556D"
                  />
                </g>
                <g filter="url(#filter1_b)">
                  <path
                    d="M62.7847 19.9208C60.228 17.5139 56.8349 16.2858 53.3941 16.5069H31.0767C27.612 16.2858 24.219 17.5139 21.6623 19.9208C19.3207 22.5489 18.126 26.0365 18.341 29.5978V52.5378C18.126 56.0991 19.3207 59.5868 21.6623 62.2148C24.219 64.6218 27.612 65.8498 31.0767 65.6288H53.3941C56.8349 65.8498 60.2519 64.6218 62.8086 62.2148C65.1263 59.5868 66.3449 56.0991 66.1299 52.5378V29.5978C66.321 26.0365 65.1263 22.5489 62.7847 19.9208Z"
                    fill="#FC9FAC"
                    fillOpacity="0.35"
                  />
                </g>
                <g filter="url(#filter2_b)">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M62.5298 19.6872C62.6157 19.7638 62.7006 19.8417 62.7847 19.9208C62.8615 20.007 62.937 20.0941 63.0113 20.182C65.2032 22.7776 66.3148 26.1533 66.1299 29.5978V52.5378C66.345 56.0991 65.1264 59.5868 62.8086 62.2148C60.2519 64.6218 56.835 65.8498 53.3942 65.6288H31.0768C27.6121 65.8498 24.2191 64.6218 21.6624 62.2148C19.3207 59.5868 18.126 56.0991 18.3411 52.5378V29.5978C18.126 26.0365 19.3207 22.5489 21.6624 19.9208C24.2191 17.5139 27.6121 16.2858 31.0768 16.5069H53.3942C56.7219 16.2931 60.0048 17.4347 62.5298 19.6872ZM31.0877 16.1611H53.3832C56.9157 15.9373 60.3962 17.199 63.0185 19.6661C63.0233 19.6705 63.028 19.675 63.0325 19.6797C63.0368 19.684 63.0409 19.6885 63.0448 19.693C65.4455 22.3884 66.669 25.9613 66.4757 29.6071V52.5274C66.6933 56.1768 65.4436 59.7498 63.0679 62.4435C63.0609 62.4515 63.0534 62.4592 63.0456 62.4666C60.4225 64.936 56.9166 66.1984 53.3832 65.9745H31.0877C27.5304 66.1984 24.0483 64.9359 21.4254 62.4666C21.418 62.4596 21.411 62.4524 21.4042 62.4448C19.0026 59.7494 17.7778 56.1753 17.9953 52.5274V29.6082C17.7778 25.9603 19.0026 22.3862 21.4042 19.6908C21.411 19.6833 21.418 19.676 21.4254 19.6691C24.0484 17.1997 27.5304 15.9372 31.0877 16.1611Z"
                    fill="url(#paint1_linear)"
                  />
                </g>
                <g filter="url(#filter3_bd)">
                  <path
                    d="M55.8778 36.4025L39.7968 52.9811C38.9605 53.8162 37.8614 54.2828 36.7144 54.2828H31.0992C30.7886 54.2828 30.5019 54.16 30.2868 53.939C30.0718 53.7179 29.9762 53.4232 29.9762 53.1039L30.1196 47.283C30.1435 46.1286 30.5975 45.0479 31.386 44.2374L42.7836 32.5219C42.9748 32.3254 43.3093 32.3254 43.5004 32.5219L47.4908 36.599C47.7536 36.8691 48.136 37.0411 48.5422 37.0411C49.4263 37.0411 50.1192 36.3042 50.1192 35.42C50.1192 34.9779 49.9519 34.585 49.6891 34.2902C49.6174 34.192 45.8182 30.3114 45.8182 30.3114C45.5793 30.0658 45.5793 29.6482 45.8182 29.4026L47.4191 27.7325C48.9006 26.2097 51.29 26.2097 52.7715 27.7325L55.8778 30.9254C57.3353 32.4236 57.3353 34.8797 55.8778 36.4025Z"
                    fill="url(#paint2_linear)"
                  />
                </g>
                <defs>
                  <filter
                    id="filter0_f"
                    x="0.650276"
                    y="0.737678"
                    width="58.1117"
                    height="58.3816"
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
                    <feGaussianBlur
                      stdDeviation="3.12878"
                      result="effect1_foregroundBlur"
                    />
                  </filter>
                  <filter
                    id="filter1_b"
                    x="9.97287"
                    y="8.13803"
                    width="64.5248"
                    height="65.8596"
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                  >
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feGaussianBlur
                      in="BackgroundImage"
                      stdDeviation="4.17171"
                    />
                    <feComposite
                      in2="SourceAlpha"
                      operator="in"
                      result="effect1_backgroundBlur"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_backgroundBlur"
                      result="shape"
                    />
                  </filter>
                  <filter
                    id="filter2_b"
                    x="9.62717"
                    y="7.79227"
                    width="65.2163"
                    height="66.5511"
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                  >
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feGaussianBlur
                      in="BackgroundImage"
                      stdDeviation="4.17171"
                    />
                    <feComposite
                      in2="SourceAlpha"
                      operator="in"
                      result="effect1_backgroundBlur"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_backgroundBlur"
                      result="shape"
                    />
                  </filter>
                  <filter
                    id="filter3_bd"
                    x="24.7616"
                    y="21.3758"
                    width="37.424"
                    height="38.1217"
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                  >
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feGaussianBlur
                      in="BackgroundImage"
                      stdDeviation="2.60732"
                    />
                    <feComposite
                      in2="SourceAlpha"
                      operator="in"
                      result="effect1_backgroundBlur"
                    />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    />
                    <feOffset dx="1.73821" dy="1.73821" />
                    <feGaussianBlur stdDeviation="1.73821" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0.988235 0 0 0 0 0.623529 0 0 0 0 0.67451 0 0 0 0.5 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="effect1_backgroundBlur"
                      result="effect2_dropShadow"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect2_dropShadow"
                      result="shape"
                    />
                  </filter>
                  <linearGradient
                    id="paint0_linear"
                    x1="45.0034"
                    y1="2.00001"
                    x2="23.4741"
                    y2="45.8622"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#FC9FAC" />
                    <stop offset="1" stopColor="#FA556D" />
                  </linearGradient>
                  <linearGradient
                    id="paint1_linear"
                    x1="25.6957"
                    y1="21.9449"
                    x2="57.6749"
                    y2="60.4917"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="white" stopOpacity="0.25" />
                    <stop offset="1" stopColor="white" stopOpacity="0" />
                  </linearGradient>
                  <linearGradient
                    id="paint2_linear"
                    x1="55.057"
                    y1="31.5911"
                    x2="24.9859"
                    y2="32.5468"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="white" />
                    <stop offset="1" stopColor="white" stopOpacity="0.2" />
                  </linearGradient>
                </defs>
              </svg>
            ),
            programmation: (
              <svg
                width="70"
                height="70"
                viewBox="0 0 70 70"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M37.7316 8.6544L17.253 13.883C9.82491 15.7795 6.6654 21.0281 8.66231 28.1294L15.4256 52.1805C17.4552 59.3982 22.9194 62.3452 30.3475 60.4486L50.826 55.2201C58.3739 53.2929 61.4374 48.1687 59.4078 40.951L52.6445 16.8999C50.6476 9.7986 45.2794 6.7273 37.7316 8.6544Z"
                  fill="url(#paint0_linear)"
                />
                <g filter="url(#filter0_f)">
                  <path
                    d="M25.8402 54.9692C23.4937 55.5683 21.0312 54.0619 20.3402 51.6044L12.7187 24.5015C12.0277 22.044 13.3697 19.5662 15.7163 18.9671L42.371 12.1616C44.7175 11.5625 47.18 13.069 47.871 15.5264L55.4925 42.6293C56.1835 45.0868 54.8415 47.5646 52.4949 48.1638L25.8402 54.9692Z"
                    fill="#7144F7"
                    fillOpacity="0.5"
                  />
                </g>
                <g filter="url(#filter1_b)">
                  <path
                    d="M56.9891 21.1003H35.7881C28.098 21.1003 23.6205 25.3908 23.6205 32.7426V57.6422C23.6205 65.1145 28.098 69.3086 35.7881 69.3086H56.9891C64.8032 69.3086 69.1542 65.1145 69.1542 57.6422V32.7426C69.1542 25.3908 64.8032 21.1003 56.9891 21.1003Z"
                    fill="#C8B7FC"
                    fillOpacity="0.35"
                  />
                </g>
                <g filter="url(#filter2_b)">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M35.7881 20.787H56.9891C60.9518 20.787 64.0804 21.8756 66.2194 23.9391C68.3599 26.004 69.4674 29.0047 69.4674 32.7426V57.6422C69.4674 61.439 68.3606 64.4467 66.2189 66.5034C64.079 68.5583 60.9499 69.6218 56.9891 69.6218H35.7881C31.8881 69.6218 28.7594 68.5577 26.6044 66.5042C24.4471 64.4487 23.3073 61.4415 23.3073 57.6422V32.7426C23.3073 29.0023 24.4478 26.002 26.6039 23.9382C28.7581 21.8762 31.8862 20.787 35.7881 20.787ZM35.7881 21.1003H56.9891C64.8032 21.1003 69.1542 25.3908 69.1542 32.7426V57.6422C69.1542 65.1144 64.8032 69.3086 56.9891 69.3086H35.7881C28.098 69.3086 23.6205 65.1144 23.6205 57.6422V32.7426C23.6205 25.3908 28.098 21.1003 35.7881 21.1003Z"
                    fill="url(#paint1_linear)"
                  />
                </g>
                <g filter="url(#filter3_bd)">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M36.471 32.3097V32.3338C35.3807 32.3338 34.4979 33.1774 34.4979 34.2139C34.4979 35.2504 35.3807 36.094 36.471 36.094H44.0321C45.1224 36.094 46.0078 35.2504 46.0078 34.1874C46.0078 33.1533 45.1224 32.3097 44.0321 32.3097H36.471ZM56.3035 46.9896H36.471C35.3808 46.9896 34.4979 46.146 34.4979 45.1095C34.4979 44.073 35.3808 43.2269 36.471 43.2269H56.3035C57.3912 43.2269 58.2766 44.073 58.2766 45.1095C58.2766 46.146 57.3912 46.9896 56.3035 46.9896ZM56.3036 58.005H36.4712C35.7123 58.1014 34.9787 57.7398 34.5739 57.1372C34.1692 56.5105 34.1692 55.7151 34.5739 55.1125C34.9787 54.4858 35.7123 54.1483 36.4712 54.2206H56.3036C57.313 54.3171 58.0744 55.1366 58.0744 56.1249C58.0744 57.0866 57.313 57.9086 56.3036 58.005Z"
                    fill="url(#paint2_linear)"
                  />
                </g>
                <g filter="url(#filter4_bd)">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M36.5963 32.4591H36.471C35.4442 32.4591 34.6232 33.2521 34.6232 34.2139C34.6232 35.1756 35.4442 35.9687 36.471 35.9687H44.0321C45.0579 35.9687 45.8825 35.1766 45.8825 34.1874C45.8825 33.2283 45.0592 32.4349 44.0321 32.4349H36.5963V32.4591ZM36.4633 57.8797H56.2976C57.2431 57.7865 57.9491 57.0168 57.9491 56.1249C57.9491 55.2056 57.2422 54.439 56.2976 54.3459H36.4592C35.7442 54.2778 35.0571 54.5953 34.6792 55.1805L34.678 55.1824C34.3023 55.7416 34.3006 56.4823 34.6786 57.0683C35.0582 57.6328 35.7459 57.9708 36.4554 57.8807L36.4633 57.8797ZM34.5739 57.1372C34.1692 56.5105 34.1692 55.7151 34.5739 55.1125C34.9787 54.4858 35.7123 54.1483 36.4712 54.2206H56.3036C57.313 54.3171 58.0744 55.1366 58.0744 56.1249C58.0744 57.0866 57.313 57.9086 56.3036 58.005H36.4712C35.7123 58.1014 34.9787 57.7398 34.5739 57.1372ZM36.471 46.8643H56.3035C57.3278 46.8643 58.1513 46.0711 58.1513 45.1095C58.1513 44.1476 57.3276 43.3522 56.3035 43.3522H36.471C35.4445 43.3522 34.6232 44.1475 34.6232 45.1095C34.6232 46.0712 35.4443 46.8643 36.471 46.8643ZM36.471 32.3338V32.3097H44.0321C45.1224 32.3097 46.0078 33.1533 46.0078 34.1874C46.0078 35.2504 45.1224 36.094 44.0321 36.094H36.471C35.3807 36.094 34.4979 35.2504 34.4979 34.2139C34.4979 33.1774 35.3807 32.3338 36.471 32.3338ZM36.471 46.9896H56.3035C57.3912 46.9896 58.2766 46.146 58.2766 45.1095C58.2766 44.073 57.3912 43.2269 56.3035 43.2269H36.471C35.3808 43.2269 34.4979 44.073 34.4979 45.1095C34.4979 46.146 35.3808 46.9896 36.471 46.9896Z"
                    fill="url(#paint3_linear)"
                  />
                </g>
                <defs>
                  <filter
                    id="filter0_f"
                    x="0.537109"
                    y="0.0302124"
                    width="67.1369"
                    height="67.0704"
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
                    <feGaussianBlur
                      stdDeviation="6"
                      result="effect1_foregroundBlur"
                    />
                  </filter>
                  <filter
                    id="filter1_b"
                    x="16.0624"
                    y="13.5422"
                    width="60.6499"
                    height="63.3245"
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                  >
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feGaussianBlur
                      in="BackgroundImage"
                      stdDeviation="3.77906"
                    />
                    <feComposite
                      in2="SourceAlpha"
                      operator="in"
                      result="effect1_backgroundBlur"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_backgroundBlur"
                      result="shape"
                    />
                  </filter>
                  <filter
                    id="filter2_b"
                    x="15.7491"
                    y="13.2289"
                    width="61.2764"
                    height="63.951"
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                  >
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feGaussianBlur
                      in="BackgroundImage"
                      stdDeviation="3.77906"
                    />
                    <feComposite
                      in2="SourceAlpha"
                      operator="in"
                      result="effect1_backgroundBlur"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_backgroundBlur"
                      result="shape"
                    />
                  </filter>
                  <filter
                    id="filter3_bd"
                    x="29.5466"
                    y="27.5858"
                    width="33.4539"
                    height="35.1585"
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                  >
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feGaussianBlur
                      in="BackgroundImage"
                      stdDeviation="2.36191"
                    />
                    <feComposite
                      in2="SourceAlpha"
                      operator="in"
                      result="effect1_backgroundBlur"
                    />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    />
                    <feOffset dx="1.57461" dy="1.57461" />
                    <feGaussianBlur stdDeviation="1.57461" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0.577356 0 0 0 0 0.359375 0 0 0 0 0.9375 0 0 0 0.5 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="effect1_backgroundBlur"
                      result="effect2_dropShadow"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect2_dropShadow"
                      result="shape"
                    />
                  </filter>
                  <filter
                    id="filter4_bd"
                    x="29.5466"
                    y="27.5858"
                    width="33.4539"
                    height="35.1585"
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                  >
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feGaussianBlur
                      in="BackgroundImage"
                      stdDeviation="2.36191"
                    />
                    <feComposite
                      in2="SourceAlpha"
                      operator="in"
                      result="effect1_backgroundBlur"
                    />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    />
                    <feOffset dx="1.57461" dy="1.57461" />
                    <feGaussianBlur stdDeviation="1.57461" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0.577356 0 0 0 0 0.359375 0 0 0 0 0.9375 0 0 0 0.5 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="effect1_backgroundBlur"
                      result="effect2_dropShadow"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect2_dropShadow"
                      result="shape"
                    />
                  </filter>
                  <linearGradient
                    id="paint0_linear"
                    x1="27.4911"
                    y1="11.269"
                    x2="39.454"
                    y2="58.1236"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#C8B7FC" />
                    <stop offset="1" stopColor="#A78BFA" />
                  </linearGradient>
                  <linearGradient
                    id="paint1_linear"
                    x1="30.6552"
                    y1="26.4764"
                    x2="62.1304"
                    y2="63.3241"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="white" stopOpacity="0.25" />
                    <stop offset="1" stopColor="white" stopOpacity="0" />
                  </linearGradient>
                  <linearGradient
                    id="paint2_linear"
                    x1="56.5746"
                    y1="36.9525"
                    x2="29.8303"
                    y2="37.7667"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="white" />
                    <stop offset="1" stopColor="white" stopOpacity="0.2" />
                  </linearGradient>
                  <linearGradient
                    id="paint3_linear"
                    x1="38.0918"
                    y1="35.305"
                    x2="54.6936"
                    y2="54.5036"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="white" stopOpacity="0.25" />
                    <stop offset="1" stopColor="white" stopOpacity="0" />
                  </linearGradient>
                </defs>
              </svg>
            ),
            audiovisuel: (
              <svg
                width="65"
                height="64"
                viewBox="0 0 65 64"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g filter="url(#filter0_f)">
                  <path
                    d="M48.5598 21.821C49.4889 21.3555 50.5788 21.4041 51.4656 21.9544C52.3524 22.5046 52.8814 23.4548 52.8814 24.496V40.4993C52.8814 41.5405 52.3524 42.4907 51.4656 43.0388C50.9809 43.3372 50.4391 43.4896 49.8931 43.4896C49.4381 43.4896 48.9831 43.3859 48.5577 43.17L24.302 32.6883L48.5598 21.821Z"
                    fill="#6098DD"
                  />
                </g>
                <path
                  d="M57.8941 15.0926C59.33 14.3609 61.0144 14.4374 62.3849 15.3021C63.7553 16.1667 64.573 17.6599 64.573 19.2961V44.444C64.573 46.0802 63.7553 47.5734 62.3849 48.4347C61.6359 48.9036 60.7985 49.1431 59.9547 49.1431C59.2515 49.1431 58.5483 48.9801 57.8908 48.6409L20.4048 32.1696L57.8941 15.0926Z"
                  fill="url(#paint0_linear)"
                />
                <g filter="url(#filter1_b)">
                  <path
                    d="M33.5046 55.4247H14.4499C6.48192 55.4247 0.918823 50.1094 0.918823 42.5V20.6087C0.918823 12.9961 6.48192 7.68402 14.4499 7.68402H33.5046C41.4725 7.68402 47.0356 12.9961 47.0356 20.6087V42.5C47.0356 50.1094 41.4725 55.4247 33.5046 55.4247Z"
                    fill="#96D6FA"
                    fillOpacity="0.35"
                  />
                </g>
                <g filter="url(#filter2_b)">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M33.5045 55.8435H14.4498C10.3715 55.8435 6.88093 54.4819 4.40705 52.1187C1.93178 49.7541 0.5 46.4108 0.5 42.5V20.6087C0.5 16.6963 1.93175 13.353 4.40708 10.9888C6.88099 8.62598 10.3716 7.26526 14.4498 7.26526H33.5045C37.5828 7.26526 41.0734 8.62598 43.5473 10.9888C46.0226 13.353 47.4544 16.6963 47.4544 20.6087V42.5C47.4544 46.4108 46.0226 49.7541 43.5473 52.1187C41.0734 54.4819 37.5828 55.8435 33.5045 55.8435ZM14.4498 55.4247H33.5045C41.4725 55.4247 47.0356 50.1094 47.0356 42.5V20.6087C47.0356 12.9961 41.4725 7.68404 33.5045 7.68404H14.4498C6.48188 7.68404 0.918778 12.9961 0.918778 20.6087V42.5C0.918778 50.1094 6.48188 55.4247 14.4498 55.4247Z"
                    fill="url(#paint1_linear)"
                  />
                </g>
                <defs>
                  <filter
                    id="filter0_f"
                    x="20.5125"
                    y="17.7142"
                    width="36.1584"
                    height="29.5648"
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
                    <feGaussianBlur
                      stdDeviation="1.89474"
                      result="effect1_foregroundBlur"
                    />
                  </filter>
                  <filter
                    id="filter1_b"
                    x="-9.18644"
                    y="-2.42124"
                    width="66.3273"
                    height="67.9512"
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                  >
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feGaussianBlur
                      in="BackgroundImage"
                      stdDeviation="5.05263"
                    />
                    <feComposite
                      in2="SourceAlpha"
                      operator="in"
                      result="effect1_backgroundBlur"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_backgroundBlur"
                      result="shape"
                    />
                  </filter>
                  <filter
                    id="filter2_b"
                    x="-9.60526"
                    y="-2.84"
                    width="67.1649"
                    height="68.7887"
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                  >
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feGaussianBlur
                      in="BackgroundImage"
                      stdDeviation="5.05263"
                    />
                    <feComposite
                      in2="SourceAlpha"
                      operator="in"
                      result="effect1_backgroundBlur"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_backgroundBlur"
                      result="shape"
                    />
                  </filter>
                  <linearGradient
                    id="paint0_linear"
                    x1="45.0481"
                    y1="14.5939"
                    x2="45.0481"
                    y2="49.1431"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#8BD3FB" />
                    <stop offset="1" stopColor="#5FBEF3" />
                  </linearGradient>
                  <linearGradient
                    id="paint1_linear"
                    x1="0.784238"
                    y1="7.3594"
                    x2="42.5539"
                    y2="55.5306"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="white" stopOpacity="0.4" />
                    <stop offset="1" stopColor="white" stopOpacity="0" />
                  </linearGradient>
                </defs>
              </svg>
            ),
          }[props.skill]
        }
      </div>
      <h5
        className={
          { design: "red", programmation: "violet", audiovisuel: "blue" }[
            props.skill
          ]
        }
      >
        {props.title}
      </h5>
      <svg
        width="191"
        height="2"
        viewBox="0 0 191 2"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 1C0 0.447715 0.436294 0 0.97449 0H190.026C190.564 0 191 0.447715 191 1C191 1.55228 190.564 2 190.026 2H0.97449C0.436294 2 0 1.55228 0 1Z"
          fill={
            {
              design: "#FB7185",
              programmation: "#A78BFA",
              audiovisuel: "#60C3FA",
            }[props.skill]
          }
        />
      </svg>
      <p>{props.content}</p>
      <Boutons
        color={
          {
            design: "red",
            programmation: "violet",
            audiovisuel: "blue",
          }[props.skill]
        }
      >
        Voir les projets
      </Boutons>
    </div>
  )
}
