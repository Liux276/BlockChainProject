const SCVote = {
    abi:
    [{"constant":false,"inputs":[{"name":"proposal","type":"uint256"}],"name":"vote","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"getAllTickets","outputs":[{"name":"","type":"uint256[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"showDescription","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"showName","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"stopVote","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"showAllProposals","outputs":[{"name":"","type":"bytes32[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"newChairPerson","type":"address"}],"name":"giveChairToUser","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"winningProposal","outputs":[{"name":"winningProposal_","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"num","type":"uint256"}],"name":"showProposal","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"num","type":"uint256"}],"name":"getTicket","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"proposalName","type":"bytes32"},{"name":"proposalContent","type":"bytes32"}],"name":"addProposal","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"winnerProposalName","outputs":[{"name":"winnerName_","type":"bytes32"},{"name":"winnerContent_","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"voter","type":"address[]"},{"name":"weight","type":"uint256"}],"name":"giveRightToVoters","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"to_","type":"address"}],"name":"delegateTo","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"voter","type":"address"},{"name":"weight","type":"uint256"}],"name":"giveRightToVote","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"inputs":[{"name":"voteName","type":"bytes32"},{"name":"voteDescription","type":"bytes32"},{"name":"proposalNames","type":"bytes32[]"},{"name":"proposalContents","type":"bytes32[]"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"}],
    deployCode:
    '0x60806040526000600360006101000a81548160ff0219169083151502179055503480156200002c57600080fd5b5060405162001b0c38038062001b0c833981018060405260808110156200005257600080fd5b81019080805190602001909291908051906020019092919080516401000000008111156200007f57600080fd5b828101905060208101848111156200009657600080fd5b8151856020820283011164010000000082111715620000b457600080fd5b50509291906020018051640100000000811115620000d157600080fd5b82810190506020810184811115620000e857600080fd5b81518560208202830111640100000000821117156200010657600080fd5b5050929190505050336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506001600460008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600001819055508051825114151562000215576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252604081526020018062001acc6040913960400191505060405180910390fd5b60008090505b8251811015620002ce57600560606040519081016040528085848151811015156200024257fe5b90602001906020020151815260200184848151811015156200026057fe5b90602001906020020151815260200160008152509080600181540180825580915050906001820390600052602060002090600302016000909192909190915060008201518160000155602082015181600101556040820151816002015550505080806001019150506200021b565b508360018190555082600281905550505050506117db80620002f16000396000f3fe608060405234801561001057600080fd5b5060043610610112576000357c010000000000000000000000000000000000000000000000000000000090048063609ff1bd116100b4578063a0f2c29111610083578063a0f2c29114610367578063a598ffbf1461038c578063ac637c7a1461044e578063ce50aa7d1461049257610112565b8063609ff1bd1461028d57806365fd52e4146102ab5780637dc379fa146102ed578063914fbb351461032f57610112565b8063223c7049116100f0578063223c7049146101c25780632495c0ce146101e057806325389709146101ea57806334c930a81461024957610112565b80630121b93f1461011757806303e96fe31461014557806310ca4899146101a4575b600080fd5b6101436004803603602081101561012d57600080fd5b81019080803590602001909291905050506104e0565b005b61014d610691565b6040518080602001828103825283818151815260200191508051906020019060200280838360005b83811015610190578082015181840152602081019050610175565b505050509050019250505060405180910390f35b6101ac610730565b6040518082815260200191505060405180910390f35b6101ca61073a565b6040518082815260200191505060405180910390f35b6101e8610744565b005b6101f2610808565b6040518080602001828103825283818151815260200191508051906020019060200280838360005b8381101561023557808201518184015260208101905061021a565b505050509050019250505060405180910390f35b61028b6004803603602081101561025f57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506108a7565b005b610295610991565b6040518082815260200191505060405180910390f35b6102d7600480360360208110156102c157600080fd5b8101908080359060200190929190505050610a0c565b6040518082815260200191505060405180910390f35b6103196004803603602081101561030357600080fd5b8101908080359060200190929190505050610a3b565b6040518082815260200191505060405180910390f35b6103656004803603604081101561034557600080fd5b810190808035906020019092919080359060200190929190505050610a6a565b005b61036f610cd3565b604051808381526020018281526020019250505060405180910390f35b61044c600480360360408110156103a257600080fd5b81019080803590602001906401000000008111156103bf57600080fd5b8201836020820111156103d157600080fd5b803590602001918460208302840111640100000000831117156103f357600080fd5b919080806020026020016040519081016040528093929190818152602001838360200280828437600081840152601f19601f82011690508083019250505050505050919291929080359060200190929190505050610d2d565b005b6104906004803603602081101561046457600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610fb1565b005b6104de600480360360408110156104a857600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291908035906020019092919050505061145e565b005b60001515600360009054906101000a900460ff16151514151561056b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601a8152602001807f54686520766f746520686173206265656e2073746f707065642e00000000000081525060200191505060405180910390fd5b6000600460003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002090508060010160009054906101000a900460ff16151515610635576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260148152602001807f54686520766f7465722068617320766f7465642e00000000000000000000000081525060200191505060405180910390fd5b60018160010160006101000a81548160ff021916908315150217905550818160020181905550806000015460058381548110151561066f57fe5b9060005260206000209060030201600201600082825401925050819055505050565b6060806005805490506040519080825280602002602001820160405280156106c85781602001602082028038833980820191505090505b50905060008090505b600580549050811015610728576005818154811015156106ed57fe5b906000526020600020906003020160020154828281518110151561070d57fe5b906020019060200201818152505080806001019150506106d1565b508091505090565b6000600254905090565b6000600154905090565b3373ffffffffffffffffffffffffffffffffffffffff166000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff161415156107eb576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260228152602001806116ef6022913960400191505060405180910390fd5b6001600360006101000a81548160ff021916908315150217905550565b60608060058054905060405190808252806020026020018201604052801561083f5781602001602082028038833980820191505090505b50905060008090505b60058054905081101561089f5760058181548110151561086457fe5b906000526020600020906003020160000154828281518110151561088457fe5b90602001906020020181815250508080600101915050610848565b508091505090565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561094e576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260348152602001806117116034913960400191505060405180910390fd5b806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b6000806000905060008090505b600580549050811015610a0757816005828154811015156109bb57fe5b90600052602060002090600302016002015411156109fa576005818154811015156109e257fe5b90600052602060002090600302016002015491508092505b808060010191505061099e565b505090565b600080600583815481101515610a1e57fe5b906000526020600020906003020160000154905080915050919050565b600080600583815481101515610a4d57fe5b906000526020600020906003020160020154905080915050919050565b60001515600360009054906101000a900460ff161515141515610af5576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601a8152602001807f54686520766f746520686173206265656e2073746f707065642e00000000000081525060200191505060405180910390fd5b3373ffffffffffffffffffffffffffffffffffffffff166000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16141515610b9c576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260228152602001806117666022913960400191505060405180910390fd5b60008090505b600580549050811015610c635782600582815481101515610bbf57fe5b90600052602060002090600302016000015414158015610bff575081600582815481101515610bea57fe5b90600052602060002090600302016001015414155b1515610c56576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260288152602001806117886028913960400191505060405180910390fd5b8080600101915050610ba2565b5060056060604051908101604052808481526020018381526020016000815250908060018154018082558091505090600182039060005260206000209060030201600090919290919091506000820151816000015560208201518160010155604082015181600201555050505050565b6000806000610ce0610991565b9050600581815481101515610cf157fe5b9060005260206000209060030201600001549250600581815481101515610d1457fe5b9060005260206000209060030201600101549150509091565b60001515600360009054906101000a900460ff161515141515610db8576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601a8152602001807f54686520766f746520686173206265656e2073746f707065642e00000000000081525060200191505060405180910390fd5b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16141515610e5f576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260218152602001806117456021913960400191505060405180910390fd5b60008090505b8251811015610fac57600460008483815181101515610e8057fe5b9060200190602002015173ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060010160009054906101000a900460ff16158015610f3b57506000600460008584815181101515610ef157fe5b9060200190602002015173ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000154145b15610f9f5781600460008584815181101515610f5357fe5b9060200190602002015173ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600001819055505b8080600101915050610e65565b505050565b60001515600360009054906101000a900460ff16151514151561103c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601a8152602001807f54686520766f746520686173206265656e2073746f707065642e00000000000081525060200191505060405180910390fd5b60008190506000600460003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002090508060010160009054906101000a900460ff1615151561110b576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260118152602001807f53656e6465722068617320766f7465642e00000000000000000000000000000081525060200191505060405180910390fd5b5b600073ffffffffffffffffffffffffffffffffffffffff16600460008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060010160019054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff161415801561123957503373ffffffffffffffffffffffffffffffffffffffff16600460008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060010160019054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614155b1561134c57600460008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060010160019054906101000a900473ffffffffffffffffffffffffffffffffffffffff1691503373ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614151515611347576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260188152602001807f46696e64206c6f6f7020696e2064656c65676174696f6e2e000000000000000081525060200191505060405180910390fd5b61110c565b60018160010160006101000a81548160ff021916908315150217905550818160010160016101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506000600460008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002090508060010160009054906101000a900460ff16156114415781600001546005826002015481548110151561141e57fe5b906000526020600020906003020160020160008282540192505081905550611458565b816000015481600001600082825401925050819055505b50505050565b60001515600360009054906101000a900460ff1615151415156114e9576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601a8152602001807f54686520766f746520686173206265656e2073746f707065642e00000000000081525060200191505060405180910390fd5b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161480156115925750600460008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060010160009054906101000a900460ff16155b15156115e9576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260218152602001806117456021913960400191505060405180910390fd5b6000600460008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600001541415156116a3576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601c8152602001807f566f74657220686173206265656e20676976656e207269676874732e0000000081525060200191505060405180910390fd5b80600460008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000181905550505056fe4f6e6c79206368616972706572736f6e2063616e206368616e67652073746174652e4f6e6c792063686172706572736f6e2063616e2067697665206d616e6167656d656e7420726967687420746f206f74686572732e4f6e6c79206368616972706572736f6e2063616e2067697665207269676874732e4f6e6c79206368616972706572736f6e2063616e206164642070726f706f73616c2e50726f706f73616c206e616d65206f7220636f6e74656e7420686173206265656e2061646465642ea165627a7a7230582078eecf1be9efe76b6989b5381c03a3c30f4dfed2476d6e2ebbfc72e5cb46a8610029416c6c2070726f706f73616c206d757374206861766520626f74682070726f706f73616c206e616d6520616e642070726f706f73616c20636f6e74656e74732e',
    gas: 4700000
}

module.exports = SCVote