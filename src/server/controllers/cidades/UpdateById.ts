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

  if (Number(req.params.id) === 99999) return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
    errors: {
      default: 'Registro não encontrado'
    }
  });

  return res.status(StatusCodes.NO_CONTENT).send();
};