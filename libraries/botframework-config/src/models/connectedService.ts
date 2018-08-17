/**
 * Copyright(c) Microsoft Corporation.All rights reserved.
 * Licensed under the MIT License.
 */
import { IConnectedService, ServiceTypes } from '../schema';

export abstract class ConnectedService implements IConnectedService {
    public id = '';
    public name = '';
    public abstract readonly type: ServiceTypes;

    protected constructor(source: IConnectedService = {} as IConnectedService) {
        const { id = '', name = '' } = source;
        Object.assign(this, { id, name });
    }

    public abstract toJSON(): IConnectedService;

    // encrypt keys in service
    public abstract encrypt(secret: string, iv?: string): void ;

    // decrypt keys in service
    public abstract decrypt(secret: string, iv?: string): void ;

}
