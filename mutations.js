/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createOrganization = /* GraphQL */ `
  mutation CreateOrganization(
    $input: CreateOrganizationInput!
    $condition: ModelOrganizationConditionInput
  ) {
    createOrganization(input: $input, condition: $condition) {
      id
      name
      accessCode
      equipment {
        nextToken
        startedAt
        __typename
      }
      UserOrStorages {
        nextToken
        startedAt
        __typename
      }
      containers {
        nextToken
        startedAt
        __typename
      }
      manager {
        userId
        name
        email
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      organizationManagerUserId
      __typename
    }
  }
`;
export const updateOrganization = /* GraphQL */ `
  mutation UpdateOrganization(
    $input: UpdateOrganizationInput!
    $condition: ModelOrganizationConditionInput
  ) {
    updateOrganization(input: $input, condition: $condition) {
      id
      name
      accessCode
      equipment {
        nextToken
        startedAt
        __typename
      }
      UserOrStorages {
        nextToken
        startedAt
        __typename
      }
      containers {
        nextToken
        startedAt
        __typename
      }
      manager {
        userId
        name
        email
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      organizationManagerUserId
      __typename
    }
  }
`;
export const deleteOrganization = /* GraphQL */ `
  mutation DeleteOrganization(
    $input: DeleteOrganizationInput!
    $condition: ModelOrganizationConditionInput
  ) {
    deleteOrganization(input: $input, condition: $condition) {
      id
      name
      accessCode
      equipment {
        nextToken
        startedAt
        __typename
      }
      UserOrStorages {
        nextToken
        startedAt
        __typename
      }
      containers {
        nextToken
        startedAt
        __typename
      }
      manager {
        userId
        name
        email
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      organizationManagerUserId
      __typename
    }
  }
`;
export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
      userId
      name
      email
      organizations {
        nextToken
        startedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
      userId
      name
      email
      organizations {
        nextToken
        startedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
      userId
      name
      email
      organizations {
        nextToken
        startedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const createOrgUserStorage = /* GraphQL */ `
  mutation CreateOrgUserStorage(
    $input: CreateOrgUserStorageInput!
    $condition: ModelOrgUserStorageConditionInput
  ) {
    createOrgUserStorage(input: $input, condition: $condition) {
      id
      name
      organization {
        id
        name
        accessCode
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        organizationManagerUserId
        __typename
      }
      type
      user {
        userId
        name
        email
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      equipment {
        nextToken
        startedAt
        __typename
      }
      containers {
        nextToken
        startedAt
        __typename
      }
      details
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      organizationUserOrStoragesId
      userOrganizationsUserId
      __typename
    }
  }
`;
export const updateOrgUserStorage = /* GraphQL */ `
  mutation UpdateOrgUserStorage(
    $input: UpdateOrgUserStorageInput!
    $condition: ModelOrgUserStorageConditionInput
  ) {
    updateOrgUserStorage(input: $input, condition: $condition) {
      id
      name
      organization {
        id
        name
        accessCode
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        organizationManagerUserId
        __typename
      }
      type
      user {
        userId
        name
        email
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      equipment {
        nextToken
        startedAt
        __typename
      }
      containers {
        nextToken
        startedAt
        __typename
      }
      details
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      organizationUserOrStoragesId
      userOrganizationsUserId
      __typename
    }
  }
`;
export const deleteOrgUserStorage = /* GraphQL */ `
  mutation DeleteOrgUserStorage(
    $input: DeleteOrgUserStorageInput!
    $condition: ModelOrgUserStorageConditionInput
  ) {
    deleteOrgUserStorage(input: $input, condition: $condition) {
      id
      name
      organization {
        id
        name
        accessCode
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        organizationManagerUserId
        __typename
      }
      type
      user {
        userId
        name
        email
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      equipment {
        nextToken
        startedAt
        __typename
      }
      containers {
        nextToken
        startedAt
        __typename
      }
      details
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      organizationUserOrStoragesId
      userOrganizationsUserId
      __typename
    }
  }
`;
export const createContainer = /* GraphQL */ `
  mutation CreateContainer(
    $input: CreateContainerInput!
    $condition: ModelContainerConditionInput
  ) {
    createContainer(input: $input, condition: $condition) {
      id
      name
      organization {
        id
        name
        accessCode
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        organizationManagerUserId
        __typename
      }
      lastUpdatedDate
      assignedTo {
        id
        name
        type
        details
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        organizationUserOrStoragesId
        userOrganizationsUserId
        __typename
      }
      equipment {
        nextToken
        startedAt
        __typename
      }
      details
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      organizationContainersId
      orgUserStorageContainersId
      __typename
    }
  }
`;
export const updateContainer = /* GraphQL */ `
  mutation UpdateContainer(
    $input: UpdateContainerInput!
    $condition: ModelContainerConditionInput
  ) {
    updateContainer(input: $input, condition: $condition) {
      id
      name
      organization {
        id
        name
        accessCode
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        organizationManagerUserId
        __typename
      }
      lastUpdatedDate
      assignedTo {
        id
        name
        type
        details
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        organizationUserOrStoragesId
        userOrganizationsUserId
        __typename
      }
      equipment {
        nextToken
        startedAt
        __typename
      }
      details
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      organizationContainersId
      orgUserStorageContainersId
      __typename
    }
  }
`;
export const deleteContainer = /* GraphQL */ `
  mutation DeleteContainer(
    $input: DeleteContainerInput!
    $condition: ModelContainerConditionInput
  ) {
    deleteContainer(input: $input, condition: $condition) {
      id
      name
      organization {
        id
        name
        accessCode
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        organizationManagerUserId
        __typename
      }
      lastUpdatedDate
      assignedTo {
        id
        name
        type
        details
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        organizationUserOrStoragesId
        userOrganizationsUserId
        __typename
      }
      equipment {
        nextToken
        startedAt
        __typename
      }
      details
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      organizationContainersId
      orgUserStorageContainersId
      __typename
    }
  }
`;
export const createEquipment = /* GraphQL */ `
  mutation CreateEquipment(
    $input: CreateEquipmentInput!
    $condition: ModelEquipmentConditionInput
  ) {
    createEquipment(input: $input, condition: $condition) {
      id
      name
      organization {
        id
        name
        accessCode
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        organizationManagerUserId
        __typename
      }
      lastUpdatedDate
      assignedTo {
        id
        name
        type
        details
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        organizationUserOrStoragesId
        userOrganizationsUserId
        __typename
      }
      parent {
        id
        name
        lastUpdatedDate
        details
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        organizationContainersId
        orgUserStorageContainersId
        __typename
      }
      details
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      organizationEquipmentId
      orgUserStorageEquipmentId
      containerEquipmentId
      __typename
    }
  }
`;
export const updateEquipment = /* GraphQL */ `
  mutation UpdateEquipment(
    $input: UpdateEquipmentInput!
    $condition: ModelEquipmentConditionInput
  ) {
    updateEquipment(input: $input, condition: $condition) {
      id
      name
      organization {
        id
        name
        accessCode
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        organizationManagerUserId
        __typename
      }
      lastUpdatedDate
      assignedTo {
        id
        name
        type
        details
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        organizationUserOrStoragesId
        userOrganizationsUserId
        __typename
      }
      parent {
        id
        name
        lastUpdatedDate
        details
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        organizationContainersId
        orgUserStorageContainersId
        __typename
      }
      details
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      organizationEquipmentId
      orgUserStorageEquipmentId
      containerEquipmentId
      __typename
    }
  }
`;
export const deleteEquipment = /* GraphQL */ `
  mutation DeleteEquipment(
    $input: DeleteEquipmentInput!
    $condition: ModelEquipmentConditionInput
  ) {
    deleteEquipment(input: $input, condition: $condition) {
      id
      name
      organization {
        id
        name
        accessCode
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        organizationManagerUserId
        __typename
      }
      lastUpdatedDate
      assignedTo {
        id
        name
        type
        details
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        organizationUserOrStoragesId
        userOrganizationsUserId
        __typename
      }
      parent {
        id
        name
        lastUpdatedDate
        details
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        organizationContainersId
        orgUserStorageContainersId
        __typename
      }
      details
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      organizationEquipmentId
      orgUserStorageEquipmentId
      containerEquipmentId
      __typename
    }
  }
`;
