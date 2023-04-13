import { Router } from 'express';
import { StatusCodes } from 'http-status-codes';
import { CidadeController, PessoasController, UsuariosController } from '../controllers';
import { ensureAuthenticated } from '../shared/middleware';



const router = Router();

router.get('/', (req, res) => { return res.status(StatusCodes.OK).send('Olá, DEV!'); });

router.get('/cidades', ensureAuthenticated, CidadeController.getAllValidation, CidadeController.getAll);
router.get('/cidades/:id', ensureAuthenticated, CidadeController.getByIdValidation, CidadeController.getById);
router.post('/cidades', ensureAuthenticated, CidadeController.createValidation, CidadeController.create);
router.put('/cidades/:id', ensureAuthenticated, CidadeController.updateByIdValidation, CidadeController.updateById);
router.delete('/cidades/:id', ensureAuthenticated, CidadeController.deleteByIdValidation, CidadeController.deleteById);

router.get('/pessoas', ensureAuthenticated, PessoasController.getAllValidation, PessoasController.getAll);
router.post('/pessoas', ensureAuthenticated, PessoasController.createValidation, PessoasController.create);
router.get('/pessoas/:id', ensureAuthenticated, PessoasController.getByIdValidation, PessoasController.getById);
router.put('/pessoas/:id', ensureAuthenticated, PessoasController.updateByIdValidation, PessoasController.updateById);
router.delete('/pessoas/:id', ensureAuthenticated, PessoasController.deleteByIdValidation, PessoasController.deleteById);

router.post('/entrar', UsuariosController.signInValidation, UsuariosController.signIn);
router.post('/cadastrar', UsuariosController.signUpValidation, UsuariosController.signUp);

export { router };