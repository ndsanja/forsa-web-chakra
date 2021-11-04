import { Global } from "@emotion/react";
const Fonts = () => (
  <Global
    styles={`
    @font-face {
        font-family: "Dinamit Extralight";
        src: url("/fonts/Dinamit_Extralight.woff2") format("woff2");
      }
      @font-face {
        font-family: "Dinamit Light";
        src: url("/fonts/Dinamit_Light.woff2") format("woff2");
      }
      @font-face {
        font-family: "Dinamit Medium";
        src: url("/fonts/Dinamit_Medium.woff2") format("woff2");
      }
      @font-face {
        font-family: "Dinamit Regular";
        src: url("/fonts/Dinamit_Regular.woff2") format("woff2");
      }
      @font-face {
        font-family: "Dinamit Semibold";
        src: url("/fonts/Dinamit_Semibold.woff2") format("woff2");
      }
      @font-face {
        font-family: "Nocturno Regular";
        src: url("/fonts/nocturno_one.woff") format("woff");
      }
      @font-face {
        font-family: "Nocturno Semibold";
        src: url("/fonts/nocturno_two.woff") format("woff");
      }
    
      @font-face {
        font-family: "Nocturno Light";
        src: url("/fonts/nocturno_four.woff") format("woff");
      }
      
      `}
  />
);
export default Fonts;
