// import { useRef } from 'react';

import { useZxing } from 'react-zxing';
// import { BarcodeScanner } from 'react-barcode-scanner';

interface ScannerProps {
  onScan: (result: string) => void;
}

function Scanner(props: ScannerProps) {
  const { onScan } = props;
  // const inputRef = useRef(null);

  // const barcodeDetector = new BarcodeDetector();

  // if (ref) {
  //   barcodeDetector
  //     .detect(inputRef.current)
  //     .then((barcodes) => {
  //       barcodes.forEach((barcode) => console.log(barcode.rawValue));
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }

  const { ref } = useZxing({
    onDecodeResult(result) {
      onScan(result.getText());
    },
  });

  return <video ref={ref} />;
}

export default Scanner;
