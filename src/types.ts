export interface KeyProps {
  keyData: {
    id: string;
    value: string | number;
  };
}

export interface KeysProps {
  keysData: {
    id: string;
    value: string | number;
  }[];
}

export interface DisplayProps {
  input: string;
  output: string;
}
