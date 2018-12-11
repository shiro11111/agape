import { Parish } from '../../../models/parish';

export class ParishUtil {

  static getParish(): Parish {
    return {
      id: 1,
      image: {
        id: 1,
        imageName: 'img_46552314_75e38578020fba81864216ec248f711f',
        imageSize: 22,
        updatedAt: '2018-12-11',
        extension: 'jpeg',
        discriminator: 'parish'
      },
      iskkNumber: 1231,
      name: 'assdfg',
      dedicated: 'assd',
      city: 'asddgfg',
      street: '123',
      buildingNumber: '12',
      apartmentNumber: '123',
      postCode: '12-343',
      postCity: 'asdfg',
      phoneNumber: '1213245',
      deanery: {
        id: 1,
        name: 'Dekanat 2',
        diocese: {
          id: 1,
          name: 'Diecezja 1'
        }
      },
      parishType: {
        id: 1,
        name: 'Parafia'
      },
      province: {
        id: 1,
        name: 'Lubelskie',
        code: 6
      }
    };
  }
}

