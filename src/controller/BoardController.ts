import {Board} from "../entity/Board";
import {getConnection} from "typeorm";

export class BoardController {
    static addBoard = async (req, res) => {
        const {title, content} = req.body;

        const board = new Board();
        board.title = title;
        board.content = content;
        const result = await getConnection().getRepository(Board).save(board);

        res.send(result);
    }

    static findAllBoard = async (req, res) => {
        const boards = await getConnection().getRepository(Board).find();
        res.send(boards);
    }

    static findOneBoard = async (req, res) => {
        const {id} = req.params;

        const board = await getConnection().getRepository(Board).findOne({id});
        res.send(board);
    }
}