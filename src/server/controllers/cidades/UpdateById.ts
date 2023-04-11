import { Request, Response } from 'express';
import * as yup from 'yup';
import { validation } from '../../shared/middleware/Validation';
import { StatusCodes } from 'http-status-codes';

interface IParamProps {
  id?: number; 
}

interface ICidade {
  nome: string;  
}

export const updateByIdValidation = validation((getSchema) => ({
  body: getSchema<ICidade>(yup.object().shape({
    nome: yup.string().required().min(3),    
  })),
  params: getSchema<IParamProps>(yup.object().shape({
    id: yup.number().integer().required().moreThan(0),    
  }))
}));


export const updateById = async (req: Request<IParamProps, {}, ICidade>, res: Response) => {  
  console.log(req.params);
  console.log(req.body);
  return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send('Não implementado!');
};