export type ButtonPropsType = {
  callBack: () => void // НУЖНО ПРОТИПИЗИРОВАТЬ
  name: string // НУЖНО ПРОТИПИЗИРОВАТЬ
};

export const Button = (props: ButtonPropsType) => {
  const callBackHandler = () => {

  };

  return (
    <button id={'hw04-button'} onClick={props.callBack}>
      {props.name}
    </button>
  );
};
