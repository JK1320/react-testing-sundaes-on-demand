import { render, screen } from "@testing-library/react"
import Options from '../Options';


test('displays image for each scoop option from server', () => {
    render(<Options optionType="scoops" />);

    // find images  $ => means at the end of string, image src = name
    const scoopImages = screen.getAllByRole('img', {name: '/scoop$/i'});
    expect(scoopImages).toHaveLength(2);
    
    // confirm alt text of images
    const altText = scoopImages.map(element => element.alt);

    // altText will have array of alt text, array/object use toEqual() method
    expect(altText).toEqual(['Chocolate scoop', 'Vanilla scoop']);
})
