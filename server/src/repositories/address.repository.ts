import { Address } from '@/entities/address.entity';
import { Console } from 'console';
import { EntityRepository, getCustomRepository, Repository } from 'typeorm';

interface IAddress {
  name: string;
  postcode: string;
  address: string;
  detail_address: string;
  phone: string;
  user_id: number;
  is_default: boolean;
  id?: number;
}

@EntityRepository(Address)
class AddressRepository extends Repository<Address> {
  async getAddresses(user_id: string) {
    return this.find({ where: { user_id } });
  }

  async deleteAddress({ id, userId }: { id: number; userId: number }) {
    return this.delete({
      id,
      user_id: userId,
    });
  }

  async createAddress(addressData: IAddress) {
    const address = this.create(addressData);

    return this.save(address);
  }

  async updateAddress(addressData: Partial<IAddress>) {
    return this.update(addressData.id, addressData);
  }

  async removeDefaultAddress(user_id: number) {
    return this.update(
      { user_id, is_default: true },
      {
        is_default: false,
      }
    );
  }

  async getDefaultAddress(user_id: number) {
    return this.findOne({
      where: { user_id, is_default: true },
    });
  }

  async getRecentAddress(user_id: number) {
    return this.findOne({
      where: { user_id },
      order: {
        createdAt: 'DESC',
      },
    });
  }
}

export default () => getCustomRepository(AddressRepository);
