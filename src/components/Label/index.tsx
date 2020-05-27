import React from "react";

import * as S from "./styles";

export interface Props {
  label: string;
}

const Label: React.FC<Props> = ({ label }) => {
  return <S.Label>{label}</S.Label>;
};

export default Label;
