import {
  Ability,
  AbilityBuilder,
  AbilityClass,
  ExtractSubjectType,
  InferSubjects,
  PureAbility,
} from '@casl/ability';
import { Injectable } from '@nestjs/common';

import { RoleAccess } from '@/common/enums';
import { rolePermissionsMap } from '@/utils/constants';
import { User } from '@/modules/user/entities/user.entity';
import { Account } from '@/modules/account/entities/account.entity';
import { Workspace } from '@/modules/workspace/entities/workspace.entity';

type Subjects = InferSubjects<typeof Account | typeof Workspace>;

export type AccountAbility = PureAbility<[RoleAccess, Subjects]>;

@Injectable()
export class CaslAbilityFactory {
  createForUser(user: User): AccountAbility {
    const { can, build } = new AbilityBuilder<AccountAbility>(
      Ability as AbilityClass<AccountAbility>,
    );

    user.sharedAccounts.forEach((sharedAccount) => {
      const { accountId, roleAccess } = sharedAccount;
      rolePermissionsMap[roleAccess].forEach((permission) => {
        can(permission, Account, { id: accountId });
      });
    });

    return build({
      detectSubjectType: (item) =>
        item.constructor as ExtractSubjectType<Subjects>,
    });
  }
}
