import { Block, colors, side, wallState, BlockEvent } from './block.js'

function paintMatrix(mg: number[][], cores: colors[], matriz: Block[][]) {
    for (let i = 0; i < mg.length; i++) {
        matriz[i] = [];
        for (let j = 0; j < mg[0].length; j++) {
            matriz[i][j] = new Block(cores[mg[i][j]])
        }
    }
}

export class Levels {

    level_1(matriz: Block[][]){

        let mg = [
            [1,1,1,1,1,1,1,1,1,0],
            [1,0,0,0,0,0,0,0,1,0],
            [1,0,1,1,1,1,1,0,1,0],
            [1,0,1,0,0,0,1,0,1,0],
            [1,0,1,0,1,0,1,0,1,0],
            [1,0,1,0,1,1,1,0,1,0],
            [1,0,1,0,0,0,0,0,1,0],
            [1,0,1,1,1,1,1,1,1,0],
            [1,0,0,0,0,0,0,0,0,0]];
        
        paintMatrix(mg, [colors.black, colors.white], matriz);
  
        matriz[4][5].walls[side.Left] = wallState.portal;
        matriz[0][9].event = BlockEvent.endOfLevel;
        
        return [8, 0];
    } 
	
    level_2(matriz: Block[][]){
        
        let mg = [
            [1,1,1,1,1,1,1,1,1,0],
            [1,0,0,0,0,0,1,0,1,0],
            [1,0,1,1,1,1,0,0,1,0],
            [1,0,1,0,0,0,1,0,1,0],
            [1,0,1,0,1,0,1,0,1,0],
            [1,0,1,0,1,1,1,0,1,0],
            [1,0,1,0,0,0,0,0,1,0],
            [1,0,1,1,1,1,1,1,1,0],
            [1,0,0,0,0,0,0,0,0,0]];
        
        paintMatrix(mg, [colors.black, colors.white], matriz);

        matriz[4][5].walls[side.Left] = wallState.portal;
        matriz[0][9].event = BlockEvent.endOfLevel;
        
        return [8, 0];
    } 

    level_3(matriz: Block[][]) {

        let mg =[
            [0, 0, 1, 0, 0, 0, 1, 0, 0],
            [0, 0, 0, 1, 1, 1, 0, 0, 0],
            [1, 1, 1, 1, 1, 1, 1, 1, 1],
            [1, 1, 0, 0, 0, 0, 0, 1, 1],
            [1, 1, 1, 0, 0, 0, 1, 1, 1],
            [1, 1, 1, 1, 1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1, 1, 1, 1, 1],
            [0, 1, 0, 0, 1, 0, 0, 1, 0],
            [1, 1, 0, 0, 1, 0, 0, 1, 1]];
    
        paintMatrix(mg, [colors.black, colors.white], matriz);

        matriz[4][4].walls[side.Bottom] = wallState.portal;
        matriz[0][4].event = BlockEvent.endOfLevel;

        return [8, 4];
    }

    level_4(matriz: Block[][]) {

        let mg =[
            [1, 1, 1, 0, 0, 0, 1, 1, 1],
            [0, 0, 0, 1, 1, 1, 0, 0, 0],
            [0, 0, 1, 1, 1, 1, 1, 0, 0],
            [1, 1, 0, 0, 0, 0, 0, 1, 1],
            [1, 1, 1, 0, 0, 0, 1, 1, 1],
            [1, 1, 1, 1, 1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1, 1, 1, 1, 1],
            [0, 1, 0, 0, 1, 0, 0, 1, 0],
            [1, 1, 0, 0, 1, 0, 0, 1, 1]];
    
        paintMatrix(mg, [colors.black, colors.white], matriz);

        matriz[4][4].walls[side.Bottom] = wallState.portal;
        matriz[0][4].event = BlockEvent.endOfLevel;
        return [8, 4];
    }

    level_5(matriz: Block[][]) {
      
        let mg =[
            [1, 1, 0, 0, 1, 0, 0, 1, 1],
            [0, 0, 1, 1, 1, 1, 1, 0, 0],
            [0, 0, 1, 1, 0, 1, 1, 0, 0],
            [0, 0, 1, 1, 1, 1, 1, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0],
            [1, 1, 0, 0, 0, 0, 0, 1, 1],
            [0, 1, 0, 0, 1, 0, 0, 1, 0],
            [1, 1, 0, 0, 0, 0, 0, 1, 1],
            [0, 0, 1, 1, 1, 1, 1, 0, 0]];
    
        paintMatrix(mg, [colors.black, colors.white], matriz);

        matriz[8][1].walls[side.Right] = wallState.portal;
        matriz[8][7].walls[side.Left] = wallState.portal;
        matriz[0][4].event = BlockEvent.endOfLevel;

        return [8, 4];
    }

    level_6(matriz: Block[][]) {
      
        let mg =[
            [1, 1, 0, 0, 1, 0, 0, 1, 1],
            [0, 0, 1, 1, 1, 1, 1, 0, 0],
            [0, 0, 1, 1, 0, 1, 1, 0, 0],
            [0, 0, 1, 1, 1, 1, 1, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0],
            [1, 1, 0, 0, 0, 0, 0, 1, 1],
            [1, 0, 0, 0, 1, 0, 0, 0, 1],
            [1, 1, 0, 0, 0, 0, 0, 1, 1],
            [0, 0, 1, 1, 1, 1, 1, 0, 0]];
    
    paintMatrix(mg, [colors.black, colors.white], matriz);

        matriz[8][1].walls[side.Right] = wallState.portal;
        matriz[8][7].walls[side.Left] = wallState.portal;
        matriz[0][4].event = BlockEvent.endOfLevel;

        return [8, 4];
    }

    level_7(matriz: Block[][]) {

        let mg =[
                [0, 1, 0, 1, 0, 1, 1, 0, 0],
                [0, 0, 1, 0, 0, 0, 1, 0, 0],
                [1, 1, 1, 0, 0, 0, 1, 1, 1],
                [1, 0, 0, 0, 1, 0, 0, 0, 1],
                [1, 0, 1, 1, 1, 1, 1, 0, 1],
                [1, 0, 0, 0, 0, 0, 0, 0, 1],
                [1, 1, 1, 0, 0, 0, 1, 1, 1],
                [0, 0, 1, 0, 1, 0, 1, 0, 0],
                [0, 1, 0, 1, 1, 1, 0, 1, 0]];
        
        paintMatrix(mg, [colors.black, colors.white], matriz);
        
        matriz[8][2].walls[side.Right] = wallState.portal;
        matriz[8][2].walls[side.Left] = wallState.portal;
        matriz[8][6].walls[side.Left] = wallState.portal;
        matriz[8][6].walls[side.Right] = wallState.portal;
        matriz[0][5].event = BlockEvent.endOfLevel;
        
        return [0, 3];
    }

    level_8(matriz: Block[][]) {

        let mg =[
                [0, 1, 0, 1, 0, 1, 1, 0, 0],
                [0, 0, 1, 0, 0, 0, 1, 0, 0],
                [1, 1, 1, 0, 0, 0, 1, 1, 1],
                [1, 0, 0, 0, 1, 0, 0, 0, 1],
                [1, 0, 1, 0, 1, 0, 1, 0, 1],
                [1, 0, 0, 0, 0, 0, 0, 0, 1],
                [1, 1, 1, 0, 0, 0, 1, 1, 1],
                [0, 0, 1, 0, 1, 0, 1, 0, 0],
                [0, 1, 0, 1, 1, 1, 0, 1, 0]];
        
        paintMatrix(mg, [colors.black, colors.white], matriz);
        
        matriz[8][2].walls[side.Right] = wallState.portal;
        matriz[8][2].walls[side.Left] = wallState.portal;
        matriz[8][6].walls[side.Left] = wallState.portal;
        matriz[8][6].walls[side.Right] = wallState.portal;
        matriz[0][5].event = BlockEvent.endOfLevel;
        
        return [0, 3];
    }

    level_9(matriz: Block[][]) {

        let mg = [
            [0,0,1,1,0,1,1,0,0],
            [1,1,1,0,0,0,1,1,1],
            [1,0,1,0,0,0,1,0,1],
            [0,0,0,1,1,1,0,0,0],
            [0,1,0,1,0,1,0,1,0],
            [0,0,0,1,1,1,0,0,0],
            [1,1,1,0,0,0,1,1,1],
            [1,1,1,0,1,0,1,1,1],
            [0,0,1,0,0,0,1,0,0]];
            
        paintMatrix(mg, [colors.black, colors.white], matriz);

        
        matriz[0][7].walls[side.Bottom] = wallState.portal;
        matriz[8][7].walls[side.Left] = wallState.portal;
        matriz[0][1].walls[side.Right] = wallState.portal;
        matriz[8][1].walls[side.Top] = wallState.portal;
        matriz[0][3].event = BlockEvent.endOfLevel;
                    
        return[0, 5];    
    }

    level_10(matriz: Block[][]) {

        let mg = [
            [0,0,1,1,0,1,1,0,0],
            [1,1,1,0,0,0,1,1,1],
            [1,0,1,0,0,0,1,0,1],
            [0,0,0,1,1,1,0,0,0],
            [0,1,0,1,1,1,0,1,0],
            [0,0,0,1,1,1,0,0,0],
            [1,1,1,0,0,0,1,1,1],
            [1,1,1,0,0,0,1,1,1],
            [0,0,1,0,0,0,1,0,0]];
            
        paintMatrix(mg, [colors.black, colors.white], matriz);

        
        matriz[0][7].walls[side.Bottom] = wallState.portal;
        matriz[8][7].walls[side.Left] = wallState.portal;
        matriz[0][1].walls[side.Right] = wallState.portal;
        matriz[8][1].walls[side.Top] = wallState.portal;
        matriz[0][3].event = BlockEvent.endOfLevel;
                    
        return[0, 5];    
    }

    level_11(matriz: Block[][]){

        let mg = [
            [0,0,1,1,1,1,0,0],
            [0,0,1,1,1,1,0,0],
            [1,1,1,1,1,1,1,1],
            [1,1,1,0,1,0,1,1],
            [1,1,1,1,1,1,1,1],
            [1,1,1,0,1,0,1,1],
            [0,0,1,1,1,1,1,1],
            [0,0,1,1,1,1,1,0]];
        
        paintMatrix(mg, [colors.black, colors.white], matriz);

        
        
        matriz[2][0].walls[side.Top] = wallState.portal;
        matriz[7][2].walls[side.Left] = wallState.portal;
        
        matriz[7][7].event = BlockEvent.endOfLevel;
        
        return [7, 0];
    }

    level_12(matriz: Block[][]){

        let mg = [
            [0,0,1,1,1,1,0,0],
            [0,0,1,1,1,1,1,0],
            [1,1,1,1,1,1,1,1],
            [1,1,1,0,1,0,1,1],
            [1,1,1,1,1,1,1,1],
            [1,1,1,0,1,0,1,1],
            [0,1,1,1,1,1,1,1],
            [0,0,1,1,1,1,1,0]];
        
        paintMatrix(mg, [colors.black, colors.white], matriz);

        
        
        matriz[2][0].walls[side.Top] = wallState.portal;
        matriz[7][2].walls[side.Left] = wallState.portal;
        
        matriz[7][7].event = BlockEvent.endOfLevel;
        
        return [7, 0];
    }

    level_13(matriz: Block[][]) {

        let mg = [
            [ 1, 0, 1, 0, 1, 0, 1, 0],
            [ 1, 0, 1, 0, 1, 0, 1, 0],
            [ 1, 0, 1, 0, 1, 0, 1, 0],
            [ 1, 0, 1, 0, 1, 0, 1, 0],
            [ 1, 0, 1, 0, 1, 0, 1, 0],
            [ 1, 0, 1, 0, 1, 0, 1, 0],
            [ 1, 0, 1, 0, 1, 0, 1, 0],
            [ 1, 0, 1, 0, 1, 0, 1, 0]];

        paintMatrix(mg, [colors.black, colors.white], matriz);

        matriz[0][1].walls[side.Left] = wallState.portal;
        matriz[7][6].walls[side.Right] = wallState.portal;
        matriz[0][7].event = BlockEvent.endOfLevel;

        return [7, 0];
    }
    
    level_14(matriz:Block[][]){
        
        let mg = [
            [1,0,1,0,1,0,1,0],
            [0,1,0,1,0,1,0,1],
            [1,0,1,0,1,0,1,0],
            [0,1,0,1,0,1,0,1],
            [1,0,1,0,1,0,1,0],
            [0,1,0,1,0,1,0,1],
            [1,0,1,0,1,0,1,0],
            [0,1,0,1,0,1,0,1]];
        
        paintMatrix(mg, [colors.black, colors.white], matriz);
        
        matriz[0][7].walls[side.Left] = wallState.portal;
        matriz[7][0].walls[side.Top] = wallState.portal;
        matriz[0][0].event = BlockEvent.endOfLevel;

        return [7,7];
    }
}
