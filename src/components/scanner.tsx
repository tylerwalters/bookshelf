import { BarcodeScanner, useTorch } from 'react-barcode-scanner';

interface ScannerProps {
  onScan: (result: string) => void;
}

function Scanner(props: ScannerProps) {
  const { onScan } = props;

  const [isSupportTorch, , onTorchSwitch] = useTorch();

  function onCapture(detected: { rawValue: string }) {
    if (detected) {
      onScan(detected.rawValue);
    }
  }

  return (
    <div className="h-1/3 w-full m-auto not-prose border border-slate-700">
      <BarcodeScanner onCapture={onCapture} />

      {isSupportTorch ? <button onClick={onTorchSwitch}>Swtich Torch</button> : null}
    </div>
  );
}

export default Scanner;
