export interface KeyData {
  id: string;
  value: string | number;
}

export interface KeyProps {
  keyData: KeyData;
  handleKeyClick: (key: string) => void;
}

export interface KeysProps {
  keysData: KeyData[];
  handleKeyClick: (key: string) => void;
}

export interface DisplayProps {
  input: string;
  output: string;
}
