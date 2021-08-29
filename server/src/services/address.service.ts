import AddressRepository from '@/repositories/address.repository';
import { snakeToCamelObjKey } from '@/utils/snakeToCamelObjKey';

class AddressService {
  async getDefaultAddress(userId) {
    const addressRepo = AddressRepository();
    const defaultAddress = await addressRepo.getDefaultAddress(userId);
    if (defaultAddress) return snakeToCamelObjKey(defaultAddress);
    const recentAddress = await addressRepo.getRecentAddress(userId);

    if (recentAddress) return snakeToCamelObjKey(recentAddress);

    return null;
  }

  async getAddresses(userId) {
    const addressRepo = AddressRepository();
    const addresses = await addressRepo.getAddresses(userId);
    return addresses.map(snakeToCamelObjKey);
  }

  async deleteAddress({ id, userId }) {
    const addressRepo = AddressRepository();
    return await addressRepo.deleteAddress({ id, userId });
  }

  async createAddress({
    name,
    postcode,
    address,
    detail_address,
    phone,
    user_id,
    is_default,
  }) {
    const addressRepo = AddressRepository();
    if (is_default) {
      await addressRepo.removeDefaultAddress(user_id);
    }
    return await addressRepo.createAddress({
      name,
      postcode,
      address,
      detail_address,
      phone,
      user_id,
      is_default,
    });
  }

  async updateAddress({
    id,
    name,
    postcode,
    address,
    detail_address,
    phone,
    user_id,
    is_default,
  }) {
    const addressRepo = AddressRepository();
    if (is_default) {
      await addressRepo.removeDefaultAddress(user_id);
    }
    return await addressRepo.updateAddress({
      name,
      postcode,
      address,
      detail_address,
      phone,
      user_id,
      is_default,
      id,
    });
  }
}

export default new AddressService();
