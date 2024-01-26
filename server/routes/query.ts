import { Request, Response } from 'express'

export const postQuery = async(req: Request, res: Response) => {
    console.log('req recieve', req.body)
    // const { query } = req.body;
    // const URL = `https://en.wikipedia.org/w/api.php?action=opensearch&format=json&search=${query}&formatversion=2&origin=*`
    // const response = await fetch(URL);
    // const data = await response.json();
    res.send({});
}