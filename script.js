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
        <title>${MODEL_NAME} - Scheda Tecnica</title>
        <style>
          body { font-family: Arial, sans-serif; padding: 2rem; }
          h1 { border-bottom: 1px solid #ccc; }
          .info { margin-top: 1rem; }
          .info strong { display: inline-block; width: 150px; }
        </style>
      </head>
      <body>
        <h1>${MODEL_NAME}</h1>
        <div class="info"><strong>Model No:</strong> ${MODEL_NO}</div>
        <div class="info"><strong>Brand:</strong> ${BRAND}</div>
        <div class="info"><strong>Chip:</strong> ${CHIP_STRUCTURE}</div>
        <div class="info"><strong>Camera:</strong> ${MAIN_CAMERA_MP} MP</div>
        <div class="info"><strong>Video Quality:</strong> ${VIDEO_QUALITY}</div>
        <div class="info"><strong>Storage:</strong> ${STORAGE.join(', ')}</div>
        <div class="info"><strong>Connectivity:</strong> ${CONNECTIVITY.join(', ')}</div>
        <div class="info"><strong>Dual SIM:</strong> ${IS_DUAL_SIM ? 'Yes' : 'No'}</div>
        <div class="info"><strong>LTE:</strong> ${IS_LTE ? 'Yes' : 'No'}</div>
        <div class="info"><strong>WiFi:</strong> ${IS_WIFI ? 'Yes' : 'No'}</div>
        <div class="info"><strong>RAM:</strong> ${RAM_SIZE}</div>
        <script>
          window.onload = () => { window.print(); };
        </script>
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


