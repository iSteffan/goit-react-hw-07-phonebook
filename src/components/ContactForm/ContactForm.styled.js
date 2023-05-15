import styled from 'styled-components';
import {
  Form as FormikForm,
  Field as FormikInput,
  ErrorMessage as FormikErrorMessage,
} from 'formik';

export const ErrorMessage = styled(FormikErrorMessage)`
  font-size: 14px;
`;

export const Form = styled(FormikForm)`
  width: 100%;
  box-sizing: border-box;
  display: inline-flex;
  flex-direction: column;
  gap: 10px;
  padding: 20px 40px;

  background-color: #039be5;
  border: 1px solid gray;
  border-radius: 12px;
`;

export const Label = styled.label`
  font-size: 26px;
  color: white;
`;

export const Field = styled(FormikInput)`
  box-sizing: border-box;
  margin-top: 10px;
  padding: 5px 20px;
  font-size: 20px;
  line-height: 1.5;
  width: 100%;
  /* height: 40px; */
  border-radius: 12px;
`;

export const Btn = styled.button`
  display: inline-block;
  padding: 10px 20px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 10px;

  width: 150px;
  font-size: 18px;
  background-color: yellow;
  border-radius: 12px;
`;
