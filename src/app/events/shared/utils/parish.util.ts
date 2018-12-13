import { Parish } from '../../../models/parish';
import { Post } from '../../../models/post';
import { Observable, of } from 'rxjs';
import { List } from '../../../models/list';

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
      name: 'Parafia św. Łazarza',
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

  static getPostsList(): List<Post> {
    return {
      maxResults: '2',
      items: [
        {
          id: 1,
          createdAt: '13-12-2018',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eu viverra leo. Vestibulum libero metus, ' +
            'blandit sit amet mattis at, convallis eget enim. Maecenas lacinia libero in odio molestie, et dapibus sem eleifend. Nullam a ' +
            'molestie est, ut venenatis nisl. Donec quis tempus diam. ',
          parish: {
            id: 1,
            image: {
              id: 1,
              imageName: 'img_46552314_75e38578020fba81864216ec248f711f',
              imageSize: 22,
              updatedAt: '2018-12-11',
              extension: 'jpeg',
              discriminator: 'parish'
            },
            name: 'Parafia',
            city: 'Lublin'
          },
          community: null
        }
      ]
    };
  }
}

