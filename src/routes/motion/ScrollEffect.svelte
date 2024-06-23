<script>
    import { Motion, useViewportScroll, useTransform } from "svelte-motion";
    let { scrollYProgress } = useViewportScroll();
    let scale = useTransform(scrollYProgress, [0, 1], [0.2, 2]);
  </script>
  
  <div class="wrapper">
    <Motion style={{
      scale
    }} let:motion>
      <div use:motion class="contan">
        <Motion
          let:motion
          style={{
            scaleY: scrollYProgress,
          }}
        >
          <div use:motion class="item"></div>
        </Motion>
      </div>
    </Motion>
  </div>
  
  <style>
    :global(body) {
      width: 100vw;
      height: 300vh;
      overflow-x: hidden;
      padding: 0;
      margin: 0;
      background: linear-gradient(180deg, #40f, #05f);
    }
  
    .wrapper {
      width: 150px;
      height: 150px;
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translateX(-50%) translateY(-50%);
    }
  
    .contan {
      width: 100%;
      height: 100%;
      overflow: hidden;
      background: rgba(255, 255, 255, 0.2);
      border-radius: 30px;
    }
  
    .item {
      width: inherit;
      height: inherit;
      background: white;
      transform-origin: 50% 100%;
    }
  </style>
  