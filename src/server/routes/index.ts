import { Router } from 'express';
import { StatusCodes } from 'http-status-codes';
import { CidadeController, PessoasController } from '../controllers';



const router = Router();

router.get('/', (req, res) => { return res.status(StatusCodes.OK).send('Olá, DEV!'); });

router.get('/cidades', CidadeController.getAllValidation, CidadeController.getAll);
router.get('/cidades/:id', CidadeController.getByIdValidation, CidadeController.getById);
router.post('/cidades', CidadeController.createValidation, CidadeController.create);
router.put('/cidades/:id', CidadeController.updateByIdValidation, CidadeController.updateById);
router.delete('/cidades/:id', CidadeController.deleteByIdValidation, CidadeController.deleteById);

router.get('/pessoas', PessoasController.getAllValidation, PessoasController.getAll);
router.post('/pessoas', PessoasController.createValidation, PessoasController.create);
router.get('/pessoas/:id', PessoasController.getByIdValidation, PessoasController.getById);
router.put('/pessoas/:id', PessoasController.updateByIdValidation, PessoasController.updateById);
router.delete('/pessoas/:id', PessoasController.deleteByIdValidation, PessoasController.deleteById);

export { router };