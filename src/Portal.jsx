export default function PortalIntro() {

  return (
    <>
      <div className="absolute inset-0 -z-10 opacity-30">
        <style>{`
            :root {
              --deg: 1;
              --x: -50%;
              --y: -50%;
              --speed: 150ms;
            }
            .wobble-div {
              position: absolute;
              top: 10%;
              right: 60%;
              transform: translate(var(--x, -50%), var(--y, -50%)) rotate(0deg);
              font-size: 20vmin;
              width: 3em;
              height: 3em;
              border-radius: 90% 95% 85% 105%;
              background: #0f0;
              mix-blend-mode: screen;
              filter: hue-rotate(0deg);
              animation: wobble calc(var(--speed) * var(--t)) linear infinite;
              transform-origin: -var(--y) -var(--x);
              box-shadow: 0 0 .5em .2em #000 inset, 0 0 .15em 0 #fff;
            }
            
            .wobble-div::after {
              font-size: 1em;
              white-space: nowrap;
            }
            
            .wobble-div:nth-child(1) {
              --x: -53%;
              --y: -53%;
              --t: 37;
            }
            
            .wobble-div:nth-child(2) {
              --x: -47%;
              --y: -52%;
              --t: 58;
            }
            
            .wobble-div:nth-child(3) {
              --x: -45%;
              --y: -50%;
              --t: 46;
            }
            
            .wobble-div:nth-child(4) {
              --x: -53%;
              --y: -45%;
              --t: 72;
            }
            
            .wobble-div:nth-child(5) {
              --x: -55%;
              --y: -45%;
              --t: 62;
            }
            
            @keyframes wobble {
              to {
                filter: hue-rotate(360deg);
                transform: translate(var(--x), var(--y)) rotate(360deg);
              }
            }
          `}</style>

        <div className="m-0 min-h-screen flex items-center justify-center font-serif"
          style={{ background: 'radial-gradient(circle at 50% 35%, #334455, #000)' }}>
          <main className="relative w-full h-screen zoom-container">
            <div className="wobble-div flex items-center justify-center"></div>
            <div className="wobble-div flex items-center justify-center"></div>
            <div className="wobble-div flex items-center justify-center"></div>
            <div className="wobble-div flex items-center justify-center"></div>
            <div className="wobble-div flex items-center justify-center"></div>
          </main>
        </div>
      </div>
      <style>{`
        .fade-in {
          animation: fadeIn 0.5s ease-in;
        }
        
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
      `}</style>
    </>
  );
}