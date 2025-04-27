

import {  CSVCakeMapper } from "../../src/mappers/Cake.mapper";

describe('CakeMapper.build', () => {
    it('should build a cake with default properties', () => {
        const cakemap= new  CSVCakeMapper();
const cake=cakemap.map(['1', 'Cake', 'Chocolate', 'Vanilla', '10', '2', 'Buttercream', 'Vanilla', 'Sprinkles', 'Red', 'Happy Birthday!', 'Round', 'None', 'None', 'Box','50','1']);
   
        expect(cake).toBeDefined();

        
     
    });

    it('cake with missing properties', () => {
        const cakemap= new  CSVCakeMapper();
           
           
            
            
            expect(() => {cakemap.map(['1', 'Cake', 'Chocolate', '10', 'Buttercream', 'Vanilla', 'Sprinkles', 'Red', 'Happy Birthday!', 'Round', 'None', 'None', 'Box','50','1']);
            }).toThrow();

    });


    it('cake with invalid properties', () => {
        const cakemap= new  CSVCakeMapper();
        expect(() => {
            cakemap.map(['1', 'Cake', 'Chocolate', 'Vanilla', 'n', '2', 'Buttercream', 'Vanilla', 'Sprinkles', 'Red', 'Happy Birthday!', 'Round', 'None', 'None', 'Box','50','1']);
        }).toThrow();

    });

    it('cake with empty properties', () => {
        const cakemap= new  CSVCakeMapper();
        expect(() => {
            cakemap.map(['1', 'Cake', 'Chocolate', 'Vanilla', '', '2', 'Buttercream', 'Vanilla', 'Sprinkles', 'Red', 'Happy Birthday!', 'Round', 'None', 'None', 'Box','50','1']);
        }).toThrow();

    });

    it('cake with null properties', () => {
        const data:any=['1', 'Cake', 'Chocolate', 'Vanilla', null, '2', 'Buttercream', 'Vanilla', 'Sprinkles', 'Red', 'Happy Birthday!', 'Round', 'None', 'None', 'Box','50','1']

        const cakemap= new  CSVCakeMapper();
        expect(() => {
            cakemap.map(data);
        }).toThrow();

    });

    it('cake with undefined properties', () => {
        const data:any=['1', 'Cake', 'Chocolate', 'Vanilla', undefined, '2', 'Buttercream', 'Vanilla', 'Sprinkles', 'Red', 'Happy Birthday!', 'Round', 'None', 'None', 'Box','50','1']

        const cakemap= new  CSVCakeMapper();
        expect(() => {
            cakemap.map(data);
        }).toThrow();

    });
   
    

});