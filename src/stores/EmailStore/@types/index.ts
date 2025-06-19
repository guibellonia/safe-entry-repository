export type EmailState = {
  hasSend: boolean | null;
  setHasSend: (hasSend: boolean | null) => void;
}