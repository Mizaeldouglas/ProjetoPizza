import { Router,Response,Request } from "express";

const router = Router();


router.get('/teste', (req: Request, res: Response) => {
	throw new Error('Erro ao fazer essa requisiçao')
})

export { router };