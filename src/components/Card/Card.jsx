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
                  d="M42.8043 5.38385C39.9765 3.87189 36.6781 3.61299 33.6721 4.65381L13.8434 10.1303C10.714 10.7841 7.98306 12.7082 6.2676 15.4749C4.79427 18.3854 4.53861 21.7785 5.55253 24.8911L10.8528 45.2805C11.4846 48.4986 13.3519 51.3054 16.0397 53.0666C18.8674 54.5785 22.1658 54.8374 25.1931 53.7907L45.0218 48.3142C48.13 47.6664 50.8821 45.7364 52.5976 42.9696C54.0497 40.065 54.3266 36.6661 53.3126 33.5535L48.0123 13.1641C47.3593 9.95178 45.492 7.14506 42.8043 5.38385Z"
                  fill="url(#paint0_linear_816_103)"
                />
                <g opacity="0.5" filter="url(#filter0_f_816_103)">
                  <path
                    d="M33.4823 7.14378L15.2417 12.3737C8.62545 14.2707 5.72338 18.8767 7.3515 24.8765L12.8658 45.197C14.5206 51.2951 19.3017 53.6134 25.918 51.7164L44.1585 46.4865C50.8815 44.5589 53.6961 40.0627 52.0412 33.9646L46.527 13.6441C44.8988 7.64436 40.2052 5.21618 33.4823 7.14378Z"
                    fill="#FA556D"
                  />
                </g>
                <g filter="url(#filter1_b_816_103)">
                  <path
                    d="M62.7847 19.4208C60.228 17.0139 56.8349 15.7858 53.3941 16.0069H31.0767C27.612 15.7858 24.219 17.0139 21.6623 19.4208C19.3207 22.0489 18.126 25.5365 18.341 29.0978V52.0378C18.126 55.5991 19.3207 59.0868 21.6623 61.7148C24.219 64.1218 27.612 65.3498 31.0767 65.1288H53.3941C56.8349 65.3498 60.2519 64.1218 62.8086 61.7148C65.1263 59.0868 66.3449 55.5991 66.1299 52.0378V29.0978C66.321 25.5365 65.1263 22.0489 62.7847 19.4208Z"
                    fill="#FC9FAC"
                    fillOpacity="0.35"
                  />
                </g>
                <g filter="url(#filter2_b_816_103)">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M62.5298 19.1872C62.6157 19.2638 62.7006 19.3417 62.7847 19.4208C62.8615 19.507 62.937 19.5941 63.0113 19.682C65.2032 22.2776 66.3148 25.6533 66.1299 29.0978V52.0378C66.345 55.5991 65.1264 59.0868 62.8086 61.7148C60.2519 64.1218 56.835 65.3498 53.3942 65.1288H31.0768C27.6121 65.3498 24.2191 64.1218 21.6624 61.7148C19.3207 59.0868 18.126 55.5991 18.3411 52.0378V29.0978C18.126 25.5365 19.3207 22.0489 21.6624 19.4208C24.2191 17.0139 27.6121 15.7858 31.0768 16.0069H53.3942C56.7219 15.7931 60.0048 16.9347 62.5298 19.1872ZM31.0877 15.6611H53.3832C56.9157 15.4373 60.3962 16.699 63.0185 19.1661C63.0233 19.1705 63.028 19.175 63.0325 19.1797C63.0368 19.184 63.0409 19.1885 63.0448 19.193C65.4455 21.8884 66.669 25.4613 66.4757 29.1071V52.0274C66.6933 55.6768 65.4436 59.2498 63.0679 61.9435C63.0609 61.9515 63.0534 61.9592 63.0456 61.9666C60.4225 64.436 56.9166 65.6984 53.3832 65.4745H31.0877C27.5304 65.6984 24.0483 64.4359 21.4254 61.9666C21.418 61.9596 21.411 61.9524 21.4042 61.9448C19.0026 59.2494 17.7778 55.6753 17.9953 52.0274V29.1082C17.7778 25.4603 19.0026 21.8862 21.4042 19.1908C21.411 19.1833 21.418 19.176 21.4254 19.1691C24.0484 16.6997 27.5304 15.4372 31.0877 15.6611Z"
                    fill="url(#paint1_linear_816_103)"
                  />
                </g>
                <g filter="url(#filter3_bd_816_103)">
                  <path
                    d="M55.8778 35.9025L39.7968 52.4811C38.9605 53.3162 37.8614 53.7828 36.7144 53.7828H31.0992C30.7886 53.7828 30.5019 53.66 30.2868 53.439C30.0718 53.2179 29.9762 52.9232 29.9762 52.6039L30.1196 46.783C30.1435 45.6286 30.5975 44.5479 31.386 43.7374L42.7836 32.0219C42.9748 31.8254 43.3093 31.8254 43.5004 32.0219L47.4908 36.099C47.7536 36.3691 48.136 36.5411 48.5422 36.5411C49.4263 36.5411 50.1192 35.8042 50.1192 34.92C50.1192 34.4779 49.9519 34.085 49.6891 33.7902C49.6174 33.692 45.8182 29.8114 45.8182 29.8114C45.5793 29.5658 45.5793 29.1482 45.8182 28.9026L47.4191 27.2325C48.9006 25.7097 51.29 25.7097 52.7715 27.2325L55.8778 30.4254C57.3353 31.9236 57.3353 34.3797 55.8778 35.9025Z"
                    fill="url(#paint2_linear_816_103)"
                  />
                </g>
                <defs>
                  <filter
                    id="filter0_f_816_103"
                    x="0.650276"
                    y="0.237678"
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
                      result="effect1_foregroundBlur_816_103"
                    />
                  </filter>
                  <filter
                    id="filter1_b_816_103"
                    x="9.97287"
                    y="7.63803"
                    width="64.5247"
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
                      result="effect1_backgroundBlur_816_103"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_backgroundBlur_816_103"
                      result="shape"
                    />
                  </filter>
                  <filter
                    id="filter2_b_816_103"
                    x="9.62717"
                    y="7.29227"
                    width="65.2162"
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
                      result="effect1_backgroundBlur_816_103"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_backgroundBlur_816_103"
                      result="shape"
                    />
                  </filter>
                  <filter
                    id="filter3_bd_816_103"
                    x="24.7616"
                    y="20.8758"
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
                      result="effect1_backgroundBlur_816_103"
                    />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dx="1.73821" dy="1.73821" />
                    <feGaussianBlur stdDeviation="1.73821" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0.988235 0 0 0 0 0.623529 0 0 0 0 0.67451 0 0 0 0.5 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="effect1_backgroundBlur_816_103"
                      result="effect2_dropShadow_816_103"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect2_dropShadow_816_103"
                      result="shape"
                    />
                  </filter>
                  <linearGradient
                    id="paint0_linear_816_103"
                    x1="45.0034"
                    y1="1.50001"
                    x2="23.4741"
                    y2="45.3622"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#FC9FAC" />
                    <stop offset="1" stopColor="#FA556D" />
                  </linearGradient>
                  <linearGradient
                    id="paint1_linear_816_103"
                    x1="25.6957"
                    y1="21.4449"
                    x2="57.6749"
                    y2="59.9917"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="white" stopOpacity="0.25" />
                    <stop offset="1" stopColor="white" stopOpacity="0" />
                  </linearGradient>
                  <linearGradient
                    id="paint2_linear_816_103"
                    x1="55.057"
                    y1="31.0911"
                    x2="24.9859"
                    y2="32.0468"
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
                height="71"
                viewBox="0 0 70 71"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M37.7316 9.1544L17.253 14.383C9.82491 16.2795 6.6654 21.5281 8.66231 28.6294L15.4256 52.6805C17.4552 59.8982 22.9194 62.8452 30.3475 60.9486L50.826 55.7201C58.3739 53.7929 61.4374 48.6687 59.4078 41.451L52.6445 17.3999C50.6476 10.2986 45.2794 7.2273 37.7316 9.1544Z"
                  fill="url(#paint0_linear_816_116)"
                />
                <g filter="url(#filter0_f_816_116)">
                  <path
                    d="M25.8402 55.4692C23.4937 56.0683 21.0312 54.5619 20.3402 52.1044L12.7187 25.0015C12.0277 22.544 13.3697 20.0662 15.7163 19.4671L42.371 12.6616C44.7175 12.0625 47.18 13.569 47.871 16.0264L55.4925 43.1293C56.1835 45.5868 54.8415 48.0646 52.4949 48.6638L25.8402 55.4692Z"
                    fill="#7144F7"
                    fillOpacity="0.5"
                  />
                </g>
                <g filter="url(#filter1_b_816_116)">
                  <path
                    d="M56.9891 21.6003H35.7881C28.098 21.6003 23.6205 25.8908 23.6205 33.2426V58.1422C23.6205 65.6145 28.098 69.8086 35.7881 69.8086H56.9891C64.8032 69.8086 69.1542 65.6145 69.1542 58.1422V33.2426C69.1542 25.8908 64.8032 21.6003 56.9891 21.6003Z"
                    fill="#C8B7FC"
                    fillOpacity="0.35"
                  />
                </g>
                <g filter="url(#filter2_b_816_116)">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M35.7881 21.287H56.9891C60.9518 21.287 64.0804 22.3756 66.2194 24.4391C68.3599 26.504 69.4674 29.5047 69.4674 33.2426V58.1422C69.4674 61.939 68.3606 64.9467 66.2189 67.0034C64.079 69.0583 60.9499 70.1218 56.9891 70.1218H35.7881C31.8881 70.1218 28.7594 69.0577 26.6044 67.0042C24.4471 64.9487 23.3073 61.9415 23.3073 58.1422V33.2426C23.3073 29.5023 24.4478 26.502 26.6039 24.4382C28.7581 22.3762 31.8862 21.287 35.7881 21.287ZM35.7881 21.6003H56.9891C64.8032 21.6003 69.1542 25.8908 69.1542 33.2426V58.1422C69.1542 65.6144 64.8032 69.8086 56.9891 69.8086H35.7881C28.098 69.8086 23.6205 65.6144 23.6205 58.1422V33.2426C23.6205 25.8908 28.098 21.6003 35.7881 21.6003Z"
                    fill="url(#paint1_linear_816_116)"
                  />
                </g>
                <g filter="url(#filter3_bd_816_116)">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M36.471 32.8097V32.8338C35.3807 32.8338 34.4979 33.6774 34.4979 34.7139C34.4979 35.7504 35.3807 36.594 36.471 36.594H44.0321C45.1224 36.594 46.0078 35.7504 46.0078 34.6874C46.0078 33.6533 45.1224 32.8097 44.0321 32.8097H36.471ZM56.3035 47.4896H36.471C35.3808 47.4896 34.4979 46.646 34.4979 45.6095C34.4979 44.573 35.3808 43.7269 36.471 43.7269H56.3035C57.3912 43.7269 58.2766 44.573 58.2766 45.6095C58.2766 46.646 57.3912 47.4896 56.3035 47.4896ZM56.3036 58.505H36.4712C35.7123 58.6014 34.9787 58.2398 34.5739 57.6372C34.1692 57.0105 34.1692 56.2151 34.5739 55.6125C34.9787 54.9858 35.7123 54.6483 36.4712 54.7206H56.3036C57.313 54.8171 58.0744 55.6366 58.0744 56.6249C58.0744 57.5866 57.313 58.4086 56.3036 58.505Z"
                    fill="url(#paint2_linear_816_116)"
                  />
                </g>
                <g filter="url(#filter4_bd_816_116)">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M36.5963 32.9591H36.471C35.4442 32.9591 34.6232 33.7521 34.6232 34.7139C34.6232 35.6756 35.4442 36.4687 36.471 36.4687H44.0321C45.0579 36.4687 45.8825 35.6766 45.8825 34.6874C45.8825 33.7283 45.0592 32.9349 44.0321 32.9349H36.5963V32.9591ZM36.4633 58.3797H56.2976C57.2431 58.2865 57.9491 57.5168 57.9491 56.6249C57.9491 55.7056 57.2422 54.939 56.2976 54.8459H36.4592C35.7442 54.7778 35.0571 55.0953 34.6792 55.6805L34.678 55.6824C34.3023 56.2416 34.3006 56.9823 34.6786 57.5683C35.0582 58.1328 35.7459 58.4708 36.4554 58.3807L36.4633 58.3797ZM34.5739 57.6372C34.1692 57.0105 34.1692 56.2151 34.5739 55.6125C34.9787 54.9858 35.7123 54.6483 36.4712 54.7206H56.3036C57.313 54.8171 58.0744 55.6366 58.0744 56.6249C58.0744 57.5866 57.313 58.4086 56.3036 58.505H36.4712C35.7123 58.6014 34.9787 58.2398 34.5739 57.6372ZM36.471 47.3643H56.3035C57.3278 47.3643 58.1513 46.5711 58.1513 45.6095C58.1513 44.6476 57.3276 43.8522 56.3035 43.8522H36.471C35.4445 43.8522 34.6232 44.6475 34.6232 45.6095C34.6232 46.5712 35.4443 47.3643 36.471 47.3643ZM36.471 32.8338V32.8097H44.0321C45.1224 32.8097 46.0078 33.6533 46.0078 34.6874C46.0078 35.7504 45.1224 36.594 44.0321 36.594H36.471C35.3807 36.594 34.4979 35.7504 34.4979 34.7139C34.4979 33.6774 35.3807 32.8338 36.471 32.8338ZM36.471 47.4896H56.3035C57.3912 47.4896 58.2766 46.646 58.2766 45.6095C58.2766 44.573 57.3912 43.7269 56.3035 43.7269H36.471C35.3808 43.7269 34.4979 44.573 34.4979 45.6095C34.4979 46.646 35.3808 47.4896 36.471 47.4896Z"
                    fill="url(#paint3_linear_816_116)"
                  />
                </g>
                <defs>
                  <filter
                    id="filter0_f_816_116"
                    x="0.537109"
                    y="0.530212"
                    width="67.137"
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
                      result="effect1_foregroundBlur_816_116"
                    />
                  </filter>
                  <filter
                    id="filter1_b_816_116"
                    x="16.0624"
                    y="14.0422"
                    width="60.6499"
                    height="63.3246"
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
                      result="effect1_backgroundBlur_816_116"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_backgroundBlur_816_116"
                      result="shape"
                    />
                  </filter>
                  <filter
                    id="filter2_b_816_116"
                    x="15.7491"
                    y="13.7289"
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
                      result="effect1_backgroundBlur_816_116"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_backgroundBlur_816_116"
                      result="shape"
                    />
                  </filter>
                  <filter
                    id="filter3_bd_816_116"
                    x="29.5466"
                    y="28.0858"
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
                      result="effect1_backgroundBlur_816_116"
                    />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dx="1.57461" dy="1.57461" />
                    <feGaussianBlur stdDeviation="1.57461" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0.577356 0 0 0 0 0.359375 0 0 0 0 0.9375 0 0 0 0.5 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="effect1_backgroundBlur_816_116"
                      result="effect2_dropShadow_816_116"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect2_dropShadow_816_116"
                      result="shape"
                    />
                  </filter>
                  <filter
                    id="filter4_bd_816_116"
                    x="29.5466"
                    y="28.0858"
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
                      result="effect1_backgroundBlur_816_116"
                    />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dx="1.57461" dy="1.57461" />
                    <feGaussianBlur stdDeviation="1.57461" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0.577356 0 0 0 0 0.359375 0 0 0 0 0.9375 0 0 0 0.5 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="effect1_backgroundBlur_816_116"
                      result="effect2_dropShadow_816_116"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect2_dropShadow_816_116"
                      result="shape"
                    />
                  </filter>
                  <linearGradient
                    id="paint0_linear_816_116"
                    x1="27.4911"
                    y1="11.769"
                    x2="39.454"
                    y2="58.6236"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#C8B7FC" />
                    <stop offset="1" stopColor="#A78BFA" />
                  </linearGradient>
                  <linearGradient
                    id="paint1_linear_816_116"
                    x1="30.6552"
                    y1="26.9764"
                    x2="62.1304"
                    y2="63.8241"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="white" stopOpacity="0.25" />
                    <stop offset="1" stopColor="white" stopOpacity="0" />
                  </linearGradient>
                  <linearGradient
                    id="paint2_linear_816_116"
                    x1="56.5746"
                    y1="37.4525"
                    x2="29.8303"
                    y2="38.2667"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="white" />
                    <stop offset="1" stopColor="white" stopOpacity="0.2" />
                  </linearGradient>
                  <linearGradient
                    id="paint3_linear_816_116"
                    x1="38.0918"
                    y1="35.805"
                    x2="54.6936"
                    y2="55.0036"
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
                height="65"
                viewBox="0 0 65 65"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g filter="url(#filter0_f_816_71)">
                  <path
                    d="M48.5598 22.321C49.4889 21.8555 50.5788 21.9041 51.4656 22.4544C52.3524 23.0046 52.8814 23.9548 52.8814 24.996V40.9993C52.8814 42.0405 52.3524 42.9907 51.4656 43.5388C50.9809 43.8372 50.4391 43.9896 49.8931 43.9896C49.4381 43.9896 48.9831 43.8859 48.5577 43.67L24.302 33.1883L48.5598 22.321Z"
                    fill="#6098DD"
                  />
                </g>
                <path
                  d="M57.8941 15.5926C59.33 14.8609 61.0144 14.9374 62.3849 15.8021C63.7553 16.6667 64.573 18.1599 64.573 19.7961V44.944C64.573 46.5802 63.7553 48.0734 62.3849 48.9347C61.6359 49.4036 60.7985 49.6431 59.9547 49.6431C59.2515 49.6431 58.5483 49.4801 57.8908 49.1409L20.4048 32.6696L57.8941 15.5926Z"
                  fill="url(#paint0_linear_816_71)"
                />
                <g filter="url(#filter1_b_816_71)">
                  <path
                    d="M33.5046 55.9247H14.4499C6.48192 55.9247 0.918823 50.6094 0.918823 43V21.1087C0.918823 13.4961 6.48192 8.18402 14.4499 8.18402H33.5046C41.4725 8.18402 47.0356 13.4961 47.0356 21.1087V43C47.0356 50.6094 41.4725 55.9247 33.5046 55.9247Z"
                    fill="#96D6FA"
                    fillOpacity="0.35"
                  />
                </g>
                <g filter="url(#filter2_b_816_71)">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M33.5045 56.3435H14.4498C10.3715 56.3435 6.88093 54.9819 4.40705 52.6187C1.93178 50.2541 0.5 46.9108 0.5 43V21.1087C0.5 17.1963 1.93175 13.853 4.40708 11.4888C6.88099 9.12598 10.3716 7.76526 14.4498 7.76526H33.5045C37.5828 7.76526 41.0734 9.12598 43.5473 11.4888C46.0226 13.853 47.4544 17.1963 47.4544 21.1087V43C47.4544 46.9108 46.0226 50.2541 43.5473 52.6187C41.0734 54.9819 37.5828 56.3435 33.5045 56.3435ZM14.4498 55.9247H33.5045C41.4725 55.9247 47.0356 50.6094 47.0356 43V21.1087C47.0356 13.4961 41.4725 8.18404 33.5045 8.18404H14.4498C6.48188 8.18404 0.918778 13.4961 0.918778 21.1087V43C0.918778 50.6094 6.48188 55.9247 14.4498 55.9247Z"
                    fill="url(#paint1_linear_816_71)"
                  />
                </g>
                <defs>
                  <filter
                    id="filter0_f_816_71"
                    x="20.5125"
                    y="18.2142"
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
                      result="effect1_foregroundBlur_816_71"
                    />
                  </filter>
                  <filter
                    id="filter1_b_816_71"
                    x="-9.18644"
                    y="-1.92124"
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
                      result="effect1_backgroundBlur_816_71"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_backgroundBlur_816_71"
                      result="shape"
                    />
                  </filter>
                  <filter
                    id="filter2_b_816_71"
                    x="-9.60526"
                    y="-2.34"
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
                      result="effect1_backgroundBlur_816_71"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_backgroundBlur_816_71"
                      result="shape"
                    />
                  </filter>
                  <linearGradient
                    id="paint0_linear_816_71"
                    x1="45.0481"
                    y1="15.0939"
                    x2="45.0481"
                    y2="49.6431"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#8BD3FB" />
                    <stop offset="1" stopColor="#5FBEF3" />
                  </linearGradient>
                  <linearGradient
                    id="paint1_linear_816_71"
                    x1="0.784238"
                    y1="7.8594"
                    x2="42.5539"
                    y2="56.0306"
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
        enable
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
