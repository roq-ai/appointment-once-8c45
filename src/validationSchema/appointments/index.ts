import * as yup from 'yup';

export const appointmentValidationSchema = yup.object().shape({
  description: yup.string().required(),
  date: yup.date().required(),
  time: yup.date().required(),
  organization_id: yup.string().nullable(),
});
