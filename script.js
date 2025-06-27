let phoneData = [];
    document.addEventListener("DOMContentLoaded", () => {
        fetch('phones.json')
      .then(response => response.json())
      .then(data => {
        phoneData = data;
      })
      .catch(error => console.error('Error loading JSON:', error));
});

    function searchModel() {
  const input = document.getElementById('modelInput').value.trim().toUpperCase();
  const result = phoneData.find(phone => phone.MODEL_NAME === input);

  if (result) {
    const {
      MODEL_NO,
      BRAND,
      MODEL_NAME,
      CHIP_STRUCTURE,
      MAIN_CAMERA_MP,
      VIDEO_QUALITY,
      STORAGE,
      CONNECTIVITY,
      IS_DUAL_SIM,
      IS_LTE,
      IS_WIFI,
      RAM_SIZE
    } = result;

    const printableContent = `
      <html>
        <head>
            <style>
                html{
                    overflow: hidden;
                }
                .mainhalf{
                    width: 50vw;
                    height: 100vh;
                    align-items: center;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                }
                h1{
                    margin: 0;
                }
                .pricebox{
                    -webkit-print-color-adjust: exact;
                }
                @media print {
                    body {
                        margin: 0;
                        padding: 0;
                    }

                    .price-box {
                        page-break-inside: avoid;
                        page-break-before: avoid;
                        page-break-after: avoid;
                        -webkit-print-color-adjust: exact;
                        print-color-adjust: exact;
                    }
                }

                @font-face {
                    font-family: "norm";
                    src: url("fonts/Outfit-Regular.ttf") format("truetype");
                    font-weight: 400; 
                    font-style: normal;
                }

                @font-face {
                    font-family: "light";
                    src: url("fonts/Outfit-ExtraLight.ttf") format("truetype");
                    font-weight: 100;
                    font-style: normal;
                }

                @font-face {
                    font-family: "bold";
                    src: url("fonts/Outfit-SemiBold.ttf") format("truetype");
                    font-weight: 700;
                    font-style: normal;
                }
            </style>
        </head>
        <body style="display: inline-flex;">
            <div class="mainhalf">
                <img src="phoneup.png" alt="">
                <div style="border-radius: 2px;border-color: skyblue;border-style: dashed;text-align: center;width: 40vw;font-family: bold;">
                    <h1>${BRAND}</h1>
                    <h1>${MODEL_NAME}</h1>
                    <h1>STATO</h1>
                </div>
                <div style="border-radius: 2px;border-color: skyblue;border-style: dashed;text-align: center;width: 40vw;height:40vh;margin-top: 30px;font-family: norm;">
                    <table style="width: 100%;height: 80%;padding: 10px;">
                        <tbody>
                            <tr>
                                <td style="vertical-align: middle;">
                                    <div style="display: flex; align-items: center;">
                                        <img src="stor.png" alt="" style="width: 70px; margin-right: 10px;">
                                        <span>${STORAGE}</span>
                                    </div>
                                </td>
                                <td style="vertical-align: middle;">
                                    <div style="display: flex; align-items: center;">
                                        <img src="scr.png" alt="" style="width: 70px; margin-right: 10px;">
                                        <span>dimenticato di nuovo...</span>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td style="vertical-align: middle;">
                                    <div style="display: flex; align-items: center;">
                                        <img src="camera.png" alt="" style="width: 70px; margin-right: 10px;">
                                        <span>${MAIN_CAMERA_MP} MP</span>
                                    </div>
                                </td>
                                <td style="vertical-align: middle;">
                                    <div style="display: flex; align-items: center;">
                                        <img src="bat.png" alt="" style="width: 70px; margin-right: 10px;">
                                        <span>mi sono dimenticato...</span>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td style="vertical-align: middle;">
                                    <div style="display: flex; align-items: center;">
                                        <img src="video.png" alt="" style="width: 70px; margin-right: 10px;">
                                        <span>${VIDEO_QUALITY}</span>
                                    </div>
                                </td>
                                <td style="vertical-align: middle;">
                                    <div style="display: flex; align-items: center;">
                                        <img src="sim.png" alt="" style="width: 70px; margin-right: 10px;">
                                        <span>${CONNECTIVITY}</span>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td style="vertical-align: middle;">
                                    <div style="display: flex; align-items: center;">
                                        <img src="cpu.png" alt="" style="width: 70px; margin-right: 10px;">
                                        <span>${CHIP_STRUCTURE}</span>
                                    </div>
                                </td>
                                <td style="vertical-align: middle;">
                                    <div style="display: flex; align-items: center;">
                                        <img src="ram.jpg" alt="" style="width: 70px; margin-right: 10px;">
                                        <span>${RAM_SIZE}</span>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <h1 style="font-family: light;">classe energ</h1>
                </div>
                <div class="pricebox" style="border-radius: 2px;border-color: skyblue;border-style: solid;text-align: center;width: 40vw;background-color: skyblue;padding-top: 30px;padding-bottom: 30px;margin-top: -4px;">
                    <h1 style="font-family: bold;">€XXX,XX</h1>
                </div>
            </div>
            <div class="mainhalf">
                <img src="phoneup.png" alt="">
                <div style="border-radius: 2px;border-color: skyblue;border-style: dashed;text-align: center;width: 40vw;font-family: bold;">
                    <h1>${BRAND}</h1>
                    <h1>${MODEL_NAME}</h1>
                    <h1>STATO</h1>
                </div>
                <div style="border-radius: 2px;border-color: skyblue;border-style: dashed;text-align: center;width: 40vw;height:40vh;margin-top: 30px;font-family: norm;">
                    <table style="width: 100%;height: 80%;padding: 10px;">
                        <tbody>
                            <tr>
                                <td style="vertical-align: middle;">
                                    <div style="display: flex; align-items: center;">
                                        <img src="stor.png" alt="" style="width: 70px; margin-right: 10px;">
                                        <span>${STORAGE}</span>
                                    </div>
                                </td>
                                <td style="vertical-align: middle;">
                                    <div style="display: flex; align-items: center;">
                                        <img src="scr.png" alt="" style="width: 70px; margin-right: 10px;">
                                        <span>dimenticato di nuovo...</span>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td style="vertical-align: middle;">
                                    <div style="display: flex; align-items: center;">
                                        <img src="camera.png" alt="" style="width: 70px; margin-right: 10px;">
                                        <span>${MAIN_CAMERA_MP} MP</span>
                                    </div>
                                </td>
                                <td style="vertical-align: middle;">
                                    <div style="display: flex; align-items: center;">
                                        <img src="bat.png" alt="" style="width: 70px; margin-right: 10px;">
                                        <span>mi sono dimenticato...</span>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td style="vertical-align: middle;">
                                    <div style="display: flex; align-items: center;">
                                        <img src="video.png" alt="" style="width: 70px; margin-right: 10px;">
                                        <span>${VIDEO_QUALITY}</span>
                                    </div>
                                </td>
                                <td style="vertical-align: middle;">
                                    <div style="display: flex; align-items: center;">
                                        <img src="sim.png" alt="" style="width: 70px; margin-right: 10px;">
                                        <span>${CONNECTIVITY}</span>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td style="vertical-align: middle;">
                                    <div style="display: flex; align-items: center;">
                                        <img src="cpu.png" alt="" style="width: 70px; margin-right: 10px;">
                                        <span>${CHIP_STRUCTURE}</span>
                                    </div>
                                </td>
                                <td style="vertical-align: middle;">
                                    <div style="display: flex; align-items: center;">
                                        <img src="ram.jpg" alt="" style="width: 70px; margin-right: 10px;">
                                        <span>${RAM_SIZE}</span>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <h1 style="font-family: light;">classe energ</h1>
                </div>
                <div class="pricebox" style="border-radius: 2px;border-color: skyblue;border-style: solid;text-align: center;width: 40vw;background-color: skyblue;padding-top: 30px;padding-bottom: 30px;margin-top: -4px;">
                    <h1 style="font-family: bold;">€XXX,XX</h1>
                </div>
            </div>
        </body>
    </html>
    `;

    const printWindow = window.open('', '_blank');
    printWindow.document.write(printableContent);
    printWindow.document.close();
  } else {
    alert('Model number not found.');
  }
}


